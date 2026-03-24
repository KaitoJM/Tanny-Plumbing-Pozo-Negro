<template>
  <section id="services" class="bg-white">
    <div class="max-w-300 mx-auto px-4 md:px-10 py-10 md:py-16 text-center">
      <p class="text-xs font-bold tracking-widest uppercase text-brand-red mb-2">Choose a Service</p>
      <h2 class="text-2xl md:text-3xl font-extrabold text-brand-blue mb-8 md:mb-10">The Lowest Pricing In Your Area</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div v-for="service in servicesStore.services" :key="service.name"
             class="bg-white border border-gray-200 rounded-xl p-5 md:p-6 text-left shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-base font-bold text-brand-blue mb-1.5 leading-snug">{{ service.name }}</h3>
          <p class="text-sm text-gray-400 line-through mb-0.5">{{ service.priceOld }}</p>
          <p class="text-2xl font-extrabold text-brand-blue mb-3.5">{{ service.priceNew }}</p>
          <ul class="list-none p-0 mb-4 space-y-1">
            <li v-for="f in service.features" :key="f" class="text-xs text-gray-500 flex items-center gap-1.5">
              <CheckCircle :size="12" class="text-green-500 shrink-0" />
              {{ f }}
            </li>
          </ul>
          <a :href="'tel:' + company.phones[0].replace(/-/g, '')"
             class="flex items-center justify-center gap-1.5 w-full border-2 border-brand-blue text-brand-blue py-2 rounded text-xs font-bold no-underline hover:bg-brand-blue hover:text-white transition-colors">
            <Phone :size="12" /> I'm Interested!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle, Phone } from 'lucide-vue-next'
import { useServicesStore } from '../stores/useServicesStore'
import { useCompanyStore } from '../stores/useCompanyStore'

const servicesStore = useServicesStore()
const company = useCompanyStore()
</script>
