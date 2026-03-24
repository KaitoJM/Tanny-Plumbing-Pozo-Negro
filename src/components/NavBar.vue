<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-400 mx-auto px-10 py-3 flex items-center justify-between">
      <a href="#">
        <img src="/assets/tanny-logo.png" :alt="company.name + ' Logo'" class="h-18 w-auto block" />
      </a>
      <ul class="flex gap-7 list-none">
        <li><a href="#services" class="no-underline text-gray-700 text-sm font-semibold hover:text-brand-red transition-colors">Our Services</a></li>
        <li><a href="#about"    class="no-underline text-gray-700 text-sm font-semibold hover:text-brand-red transition-colors">About Us</a></li>
        <li><a href="#contact"  class="no-underline text-gray-700 text-sm font-semibold hover:text-brand-red transition-colors">Contact Us</a></li>
      </ul>
      <a :href="'tel:' + company.phones[0].replace(/-/g, '')"
         class="flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded text-sm font-bold no-underline">
        <Phone :size="14" /> {{ company.phones[0] }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
import { useCompanyStore } from '../stores/useCompanyStore'

const company = useCompanyStore()
</script>
