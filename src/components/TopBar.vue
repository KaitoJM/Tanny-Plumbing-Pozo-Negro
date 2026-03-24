<template>
  <div class="bg-brand-blue text-[#cde] text-xs py-1.5">
    <div
      class="max-w-400 mx-auto px-4 md:px-5 flex justify-between items-center gap-1.5"
    >
      <div class="flex items-center flex-wrap gap-x-4 gap-y-1">
        <!-- <span class="flex items-center gap-1.5"><Mail :size="12" /> {{ company.email }}</span> -->
        <span class="hidden md:flex items-center gap-1.5"
          ><MapPin :size="12" />
          {{
            company.branches
              .map((b) => b.name.replace(" Branch", ""))
              .join(" & ")
          }}</span
        >
        <span class="hidden lg:flex items-center gap-1.5"
          ><Clock :size="12" /> {{ company.hours }}</span
        >
      </div>
      <a
        :href="company.facebook"
        target="_blank"
        class="flex items-center gap-1.5 text-[#cde] no-underline shrink-0"
      >
        <Facebook :size="12" /> Follow us
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Mail, MapPin, Clock, Facebook } from "lucide-vue-next";
import { useCompanyStore } from "../stores/useCompanyStore";

const company = useCompanyStore();
</script>
