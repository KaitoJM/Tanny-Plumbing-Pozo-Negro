<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-400 mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
      <!-- Logo -->
      <a href="#">
        <img src="/assets/tanny-logo.png" :alt="company.name + ' Logo'" class="h-14 md:h-18 w-auto block" />
      </a>

      <!-- Desktop nav -->
      <ul class="hidden md:flex gap-7 list-none">
        <li><a href="#services" class="no-underline text-gray-700 text-sm font-semibold hover:text-brand-red transition-colors">Our Services</a></li>
        <li><a href="#about"    class="no-underline text-gray-700 text-sm font-semibold hover:text-brand-red transition-colors">About Us</a></li>
        <li><a href="#contact"  class="no-underline text-gray-700 text-sm font-semibold hover:text-brand-red transition-colors">Contact Us</a></li>
      </ul>

      <!-- Desktop CTA -->
      <a :href="'tel:' + company.phones[0].replace(/-/g, '')"
         class="hidden md:flex items-center gap-2 bg-brand-red text-white px-4 py-2 rounded text-sm font-bold no-underline">
        <Phone :size="14" /> {{ company.phones[0] }}
      </a>

      <!-- Mobile: phone icon + hamburger -->
      <div class="flex items-center gap-3 md:hidden">
        <a :href="'tel:' + company.phones[0].replace(/-/g, '')"
           class="flex items-center justify-center bg-brand-red text-white w-9 h-9 rounded-full">
          <Phone :size="16" />
        </a>
        <button @click="menuOpen = !menuOpen" class="text-gray-700 p-1" aria-label="Toggle menu">
          <X v-if="menuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="menuOpen" class="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
      <ul class="list-none flex flex-col gap-0">
        <li>
          <a href="#services" @click="menuOpen = false"
             class="block py-3 border-b border-gray-100 text-gray-700 text-sm font-semibold no-underline">
            Our Services
          </a>
        </li>
        <li>
          <a href="#about" @click="menuOpen = false"
             class="block py-3 border-b border-gray-100 text-gray-700 text-sm font-semibold no-underline">
            About Us
          </a>
        </li>
        <li>
          <a href="#contact" @click="menuOpen = false"
             class="block py-3 text-gray-700 text-sm font-semibold no-underline">
            Contact Us
          </a>
        </li>
      </ul>
      <a :href="'tel:' + company.phones[0].replace(/-/g, '')"
         class="mt-3 flex items-center justify-center gap-2 bg-brand-red text-white px-4 py-2.5 rounded text-sm font-bold no-underline w-full">
        <Phone :size="14" /> {{ company.phones[0] }}
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Phone, Menu, X } from 'lucide-vue-next'
import { useCompanyStore } from '../stores/useCompanyStore'

const company = useCompanyStore()
const menuOpen = ref<boolean>(false)
</script>
