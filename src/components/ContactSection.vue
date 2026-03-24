<template>
  <section id="contact" class="bg-brand-blue">
    <div
      class="max-w-300 mx-auto px-4 md:px-10 py-10 md:py-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 text-white"
    >
      <div class="w-full lg:flex-1">
        <p
          class="text-xs font-bold tracking-widest uppercase text-blue-300 mb-2.5"
        >
          Contact Us
        </p>
        <h2 class="text-2xl md:text-3xl font-extrabold leading-snug mb-3">
          Don't Hesitate Contact<br />Us For Any Information
        </h2>
        <p class="text-sm text-blue-200 mb-4">
          We Are Available 24/7 Service. Whatever You Call Us, We Will Answer
          And Help You With Your Problems.
        </p>
        <div class="flex flex-col gap-2 mb-6">
          <a
            v-for="phone in company.phones"
            :key="phone"
            :href="'tel:' + phone.replace(/-/g, '')"
            class="inline-flex items-center gap-2 text-white no-underline text-sm font-semibold"
          >
            <Phone :size="15" /> {{ phone }}
          </a>
        </div>
        <a
          :href="'tel:' + company.phones[0].replace(/-/g, '')"
          class="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded font-bold text-sm no-underline"
        >
          <Phone :size="15" /> Call Now
        </a>
      </div>
      <div class="w-full lg:flex-1 lg:max-w-sm">
        <img
          src="/assets/tanny-logo-avatar.png"
          alt="Plumbing work outdoors"
          class="w-full h-52 md:h-64 object-contain rounded-xl block"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Phone } from "lucide-vue-next";
import { useCompanyStore } from "../stores/useCompanyStore";

const company = useCompanyStore();
</script>
