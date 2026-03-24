<template>
  <section class="bg-blue-50">
    <div class="max-w-300 mx-auto px-4 md:px-10 py-10 md:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
      <!-- Text -->
      <div class="w-full lg:flex-1 lg:max-w-xl">
        <h1 class="text-3xl md:text-4xl font-extrabold text-brand-blue leading-tight mb-4 whitespace-pre-line">
          {{ company.hero.headline }}
        </h1>
        <p class="text-sm text-gray-500 mb-6 leading-relaxed">
          {{ company.hero.subtext }}
        </p>
        <a :href="'tel:' + company.phones[0].replace(/-/g, '')"
           class="inline-flex items-center gap-2 bg-brand-red text-white px-6 md:px-7 py-3 rounded font-bold text-sm no-underline mb-7">
          <Phone :size="15" /> {{ company.phones[0] }}
        </a>
        <!-- Countdown -->
        <div class="flex gap-2 md:gap-2.5 mt-2.5">
          <div v-for="unit in countdown" :key="unit.label"
               class="bg-brand-blue text-white text-center px-3 md:px-4 py-2.5 rounded-md flex-1 md:flex-none md:min-w-16">
            <span class="text-xl md:text-2xl font-extrabold block">{{ unit.value }}</span>
            <span class="text-[10px] uppercase tracking-widest">{{ unit.label }}</span>
          </div>
        </div>
      </div>
      <!-- Image -->
      <div class="w-full lg:flex-1 lg:max-w-md rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
          alt="Plumbing technician working"
          class="w-full h-56 md:h-72 lg:h-85 object-cover rounded-xl block"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Phone } from 'lucide-vue-next'
import { useCompanyStore } from '../stores/useCompanyStore'

const company = useCompanyStore()

const target = new Date()
target.setHours(target.getHours() + (company.hero.countdownHours ?? 24))

const h = ref<string>('00')
const m = ref<string>('00')
const s = ref<string>('00')

interface CountdownUnit {
  label: string
  value: string
}

const countdown = computed<CountdownUnit[]>(() => [
  { label: 'Hours',   value: h.value },
  { label: 'Minutes', value: m.value },
  { label: 'Seconds', value: s.value },
])

let timer: ReturnType<typeof setInterval>

function update(): void {
  let diff = Math.max(0, target.getTime() - Date.now())
  const hv = Math.floor(diff / 3600000); diff -= hv * 3600000
  const mv = Math.floor(diff / 60000);   diff -= mv * 60000
  const sv = Math.floor(diff / 1000)
  h.value = String(hv).padStart(2, '0')
  m.value = String(mv).padStart(2, '0')
  s.value = String(sv).padStart(2, '0')
}

onMounted(() => { update(); timer = setInterval(update, 1000) })
onUnmounted(() => clearInterval(timer))
</script>
