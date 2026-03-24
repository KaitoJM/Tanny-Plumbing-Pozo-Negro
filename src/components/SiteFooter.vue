<template>
  <div>
    <!-- FOOTER TOP -->
    <div class="bg-[#1230b0] border-t border-[#2545c8]">
      <div class="max-w-400 mx-auto px-10 py-10 flex gap-7 justify-center flex-wrap">
        <div class="text-center min-w-44 text-white">
          <MapPin :size="28" class="mx-auto mb-2 text-blue-300" />
          <h4 class="text-sm font-bold mb-1.5">Head Office</h4>
          <p class="text-xs text-blue-300 leading-relaxed">{{ company.name }}<br />{{ company.address }}</p>
        </div>
        <div class="text-center min-w-44 text-white">
          <Phone :size="28" class="mx-auto mb-2 text-blue-300" />
          <h4 class="text-sm font-bold mb-1.5">Phone Numbers</h4>
          <p class="text-xs text-blue-300 leading-relaxed">
            <span v-for="(phone, i) in company.phones" :key="phone">
              {{ phone }}<br v-if="i < company.phones.length - 1" />
            </span>
          </p>
        </div>
        <div class="text-center min-w-44 text-white">
          <Clock :size="28" class="mx-auto mb-2 text-blue-300" />
          <h4 class="text-sm font-bold mb-1.5">Working Time</h4>
          <p class="text-xs text-blue-300 leading-relaxed">{{ company.hours }}<br />365 Days</p>
        </div>
      </div>
    </div>

    <!-- FOOTER BOTTOM -->
    <footer class="bg-[#0c1d8a]">
      <div class="max-w-400 mx-auto px-10 pt-10 pb-5 text-blue-200">
        <div class="flex gap-10 flex-wrap justify-between mb-7">
          <div class="max-w-52">
            <img
              src="/assets/tanny-logo.png"
              :alt="company.name"
              class="h-11 w-auto mb-3 brightness-0 invert block"
            />
            <p class="text-xs text-blue-300 leading-relaxed">{{ company.footer.about }}</p>
          </div>
          <div>
            <h4 class="text-sm font-bold text-white mb-3.5">Our Services</h4>
            <ul class="list-none p-0 space-y-0.5">
              <li v-for="s in servicesStore.services" :key="s.name" class="text-xs text-blue-300">{{ s.name }}</li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-bold text-white mb-3.5">Service Areas</h4>
            <ul class="list-none p-0 space-y-0.5">
              <li v-for="area in company.footer.serviceAreas" :key="area" class="text-xs text-blue-300">{{ area }}</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-[#2545c8] pt-4 text-center text-xs text-blue-400">
          Copyright © {{ new Date().getFullYear() }} {{ company.name }} | All Rights Reserved
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Phone, Clock } from 'lucide-vue-next'
import { useCompanyStore } from '../stores/useCompanyStore'
import { useServicesStore } from '../stores/useServicesStore'

const company = useCompanyStore()
const servicesStore = useServicesStore()
</script>
