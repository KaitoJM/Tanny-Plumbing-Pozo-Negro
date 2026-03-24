<template>
  <section class="bg-blue-50">
    <div class="max-w-300 mx-auto px-10 py-16 text-center">
      <p class="text-xs font-bold tracking-widest uppercase text-brand-red mb-2">Testimonials</p>
      <h2 class="text-3xl font-extrabold text-brand-blue mb-6">Our Clients Most Valuable Words</h2>

      <div class="mb-7">
        <strong class="text-lg text-brand-blue tracking-wide">EXCELLENT</strong>
        <div class="flex justify-center gap-0.5 my-1.5">
          <Star v-for="n in 5" :key="n" :size="20" class="text-yellow-400 fill-yellow-400" />
        </div>
        <span class="text-sm font-bold text-gray-700">
          Based on {{ store.testimonials.length }} reviews &nbsp; Google
        </span>
      </div>

      <div class="flex gap-4 justify-center flex-wrap">
        <div v-for="review in store.testimonials" :key="review.name"
             class="bg-white rounded-xl p-4 w-52 text-left shadow-sm">
          <div class="flex items-center gap-2.5 mb-2.5">
            <div class="w-9 h-9 rounded-full text-white flex items-center justify-center font-bold text-sm shrink-0"
                 :style="{ background: review.color }">
              {{ review.initial }}
            </div>
            <div>
              <div class="font-bold text-xs">{{ review.name }}</div>
              <div class="flex gap-0.5">
                <Star v-for="n in review.rating" :key="n" :size="11" class="text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-500 leading-relaxed">{{ review.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'
import { useTestimonialsStore } from '../stores/useTestimonialsStore'

const store = useTestimonialsStore()
</script>
