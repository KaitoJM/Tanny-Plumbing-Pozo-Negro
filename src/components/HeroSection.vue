<template>
  <section class="bg-blue-50">
    <div class="max-w-300 mx-auto px-10 py-16 flex items-center justify-between gap-10 flex-wrap">
      <div class="flex-1 min-w-70 max-w-xl">
        <h1 class="text-4xl font-extrabold text-brand-blue leading-tight mb-4 whitespace-pre-line">
          {{ company.hero.headline }}
        </h1>
        <p class="text-sm text-gray-500 mb-6 leading-relaxed">
          {{ company.hero.subtext }}
        </p>
        <a :href="'tel:' + company.phones[0].replace(/-/g, '')"
           class="inline-flex items-center gap-2 bg-brand-red text-white px-7 py-3 rounded font-bold text-sm no-underline mb-7">
          <Phone :size="15" /> {{ company.phones[0] }}
        </a>
        <div class="flex gap-2.5 mt-2.5">
          <div v-for="unit in countdown" :key="unit.label"
               class="bg-brand-blue text-white text-center px-4 py-2.5 rounded-md min-w-16">
            <span class="text-2xl font-extrabold block">{{ unit.value }}</span>
            <span class="text-[10px] uppercase tracking-widest">{{ unit.label }}</span>
          </div>
        </div>
      </div>
      <div class="flex-1 min-w-65 max-w-md rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
          alt="Plumbing technician working"
          class="w-full h-85 object-cover rounded-xl block"
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
