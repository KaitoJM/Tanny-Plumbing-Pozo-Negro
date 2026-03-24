<template>
  <section id="gallery" class="bg-gray-50">
    <div class="max-w-300 mx-auto px-4 md:px-10 py-10 md:py-16 text-center">
      <p class="text-xs font-bold tracking-widest uppercase text-brand-red mb-2">Our Work</p>
      <h2 class="text-2xl md:text-3xl font-extrabold text-brand-blue mb-8 md:mb-10">Gallery</h2>

      <div class="relative overflow-hidden rounded-2xl shadow-md select-none">
        <!-- Slides -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${current * (100 / perPage)}%)` }"
        >
          <div
            v-for="(img, i) in images"
            :key="i"
            class="shrink-0 px-1 cursor-zoom-in"
            :style="{ width: `${100 / perPage}%` }"
            @click="openLightbox(i)"
          >
            <img
              :src="img"
              :alt="`Gallery image ${i + 1}`"
              class="w-full h-56 md:h-80 object-cover rounded-xl"
              draggable="false"
            />
          </div>
        </div>

        <!-- Prev / Next -->
        <button
          @click="prev"
          :disabled="current === 0"
          class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-blue rounded-full w-9 h-9 flex items-center justify-center shadow transition-colors disabled:opacity-30"
          aria-label="Previous"
        >
          <ChevronLeft :size="18" />
        </button>
        <button
          @click="next"
          :disabled="current >= maxIndex"
          class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-brand-blue rounded-full w-9 h-9 flex items-center justify-center shadow transition-colors disabled:opacity-30"
          aria-label="Next"
        >
          <ChevronRight :size="18" />
        </button>
      </div>

      <!-- Dots -->
      <div class="flex justify-center gap-2 mt-4">
        <button
          v-for="i in maxIndex + 1"
          :key="i"
          @click="current = i - 1"
          :class="[
            'w-2.5 h-2.5 rounded-full transition-colors',
            i - 1 === current ? 'bg-brand-blue' : 'bg-gray-300 hover:bg-gray-400'
          ]"
          :aria-label="`Go to slide ${i}`"
        />
      </div>
    </div>
  </section>

  <!-- Lightbox -->
  <Teleport to="body">
    <div
      v-if="lightboxIndex !== null"
      class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      @click.self="closeLightbox"
      @keydown.esc="closeLightbox"
    >
      <img
        :src="images[lightboxIndex]"
        :alt="`Gallery image ${lightboxIndex + 1}`"
        class="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
      />

      <!-- Close -->
      <button
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white/80 hover:text-white"
        aria-label="Close"
      >
        <X :size="28" />
      </button>

      <!-- Prev -->
      <button
        @click="lightboxPrev"
        :disabled="lightboxIndex === 0"
        class="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white disabled:opacity-20"
        aria-label="Previous"
      >
        <ChevronLeft :size="36" />
      </button>

      <!-- Next -->
      <button
        @click="lightboxNext"
        :disabled="lightboxIndex === images.length - 1"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white disabled:opacity-20"
        aria-label="Next"
      >
        <ChevronRight :size="36" />
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'

import img1 from '../../assets/gallery/89961423_1076378259365236_1690359764606779392_n.jpg'
import img2 from '../../assets/gallery/90342090_1076378302698565_744315044963024896_n.jpg'
import img3 from '../../assets/gallery/90202485_1076378336031895_2467024318559682560_n.jpg'
import img4 from '../../assets/gallery/85210064_1076378692698526_7755053143624253440_n.jpg'
import img5 from '../../assets/gallery/88124934_1076378586031870_2530928591496019968_n.jpg'

const images = [img1, img2, img3, img4, img5]
const current = ref(0)

const windowWidth = ref(window.innerWidth)
const onResize = () => { windowWidth.value = window.innerWidth }
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))

const perPage = computed(() => windowWidth.value >= 768 ? 3 : 1)
const maxIndex = computed(() => images.length - perPage.value)

function prev() {
  current.value = Math.max(0, current.value - 1)
}
function next() {
  current.value = Math.min(maxIndex.value, current.value + 1)
}

const lightboxIndex = ref<number | null>(null)

function openLightbox(i: number) {
  lightboxIndex.value = i
}
function closeLightbox() {
  lightboxIndex.value = null
}
function lightboxPrev() {
  if (lightboxIndex.value !== null && lightboxIndex.value > 0)
    lightboxIndex.value--
}
function lightboxNext() {
  if (lightboxIndex.value !== null && lightboxIndex.value < images.length - 1)
    lightboxIndex.value++
}
</script>
