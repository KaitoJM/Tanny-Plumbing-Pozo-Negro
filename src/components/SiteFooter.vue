<template>
  <div>
    <!-- FOOTER TOP -->
    <div class="bg-[#1230b0] border-t border-[#2545c8]">
      <div class="max-w-400 mx-auto px-4 md:px-10 py-8 md:py-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div class="text-center text-white">
          <MapPin :size="28" class="mx-auto mb-2 text-blue-300" />
          <h4 class="text-sm font-bold mb-1.5">Our Branches</h4>
          <div class="space-y-2">
            <p v-for="branch in company.branches" :key="branch.name" class="text-xs text-blue-300 leading-relaxed">
              <span class="text-white font-semibold">{{ branch.name }}</span><br />{{ branch.address }}
            </p>
          </div>
        </div>
        <div class="text-center text-white">
          <Phone :size="28" class="mx-auto mb-2 text-blue-300" />
          <h4 class="text-sm font-bold mb-1.5">Phone Numbers</h4>
          <p class="text-xs text-blue-300 leading-relaxed">
            <span v-for="(phone, i) in company.phones" :key="phone">
              {{ phone }}<br v-if="i < company.phones.length - 1" />
            </span>
          </p>
        </div>
        <div class="text-center text-white">
          <Clock :size="28" class="mx-auto mb-2 text-blue-300" />
          <h4 class="text-sm font-bold mb-1.5">Working Time</h4>
          <p class="text-xs text-blue-300 leading-relaxed">{{ company.hours }}<br />365 Days</p>
        </div>
      </div>
    </div>

    <!-- FOOTER BOTTOM -->
    <footer class="bg-[#0c1d8a]">
      <div class="max-w-400 mx-auto px-4 md:px-10 pt-8 md:pt-10 pb-5 text-blue-200">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-7">
          <!-- Brand -->
          <div>
            <img
              src="/assets/tanny-logo.png"
              :alt="company.name"
              class="h-11 w-auto mb-3 brightness-0 invert block"
            />
            <p class="text-xs text-blue-300 leading-relaxed">{{ company.footer.about }}</p>
          </div>
          <!-- Services -->
          <div>
            <h4 class="text-sm font-bold text-white mb-3.5">Our Services</h4>
            <ul class="list-none p-0 space-y-0.5">
              <li v-for="s in servicesStore.services" :key="s.name" class="text-xs text-blue-300">{{ s.name }}</li>
            </ul>
          </div>
          <!-- Areas -->
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
