<template>
  <section id="gallery" class="bg-gray-50">
    <div class="max-w-300 mx-auto px-4 md:px-10 py-10 md:py-16">
      <!-- Top: text + video -->
      <div class="flex flex-col md:flex-row gap-8 md:gap-16 mb-10 items-center">
        <!-- Text side -->
        <div class="flex-1 text-left w-full">
          <p class="text-xs font-bold tracking-widest uppercase text-brand-red mb-2">
            Our Work
          </p>
          <h2 class="text-2xl md:text-3xl font-extrabold text-brand-blue mb-4">
            See Us In Action
          </h2>
          <p class="text-gray-500 leading-relaxed mb-6 text-sm md:text-base">
            From pozo negro siphoning to full septic tank cleaning, every job is
            handled with care and efficiency. These are real results from real
            customers across Caloocan and nearby areas.
          </p>

          <!-- Stats row -->
          <div class="flex gap-4 md:gap-6">
            <div>
              <p class="text-xl md:text-2xl font-extrabold text-brand-blue">500+</p>
              <p class="text-xs text-gray-400 uppercase tracking-wide">Jobs Done</p>
            </div>
            <div class="border-l border-gray-200 pl-4 md:pl-6">
              <p class="text-xl md:text-2xl font-extrabold text-brand-blue">24/7</p>
              <p class="text-xs text-gray-400 uppercase tracking-wide">Available</p>
            </div>
            <div class="border-l border-gray-200 pl-4 md:pl-6">
              <p class="text-xl md:text-2xl font-extrabold text-brand-blue">5★</p>
              <p class="text-xs text-gray-400 uppercase tracking-wide">Rated</p>
            </div>
          </div>
        </div>

        <!-- Video side -->
        <div class="w-full md:w-auto flex justify-center shrink-0">
          <div class="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FSepticTankCleane%2Fvideos%2F821757184899230%2F&show_text=false&width=267&t=0"
              width="267"
              height="476"
              style="border: none; overflow: hidden; display: block; max-width: 100%"
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Carousel -->
      <div
        class="relative overflow-hidden rounded-2xl shadow-md select-none"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
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
              class="w-full h-52 md:h-80 object-cover rounded-xl"
              draggable="false"
            />
          </div>
        </div>

        <!-- Prev / Next — larger tap targets on mobile -->
        <button
          @click="prev"
          :disabled="current === 0"
          class="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-blue rounded-full w-10 h-10 md:w-9 md:h-9 flex items-center justify-center shadow transition-colors disabled:opacity-30"
          aria-label="Previous"
        >
          <ChevronLeft :size="18" />
        </button>
        <button
          @click="next"
          :disabled="current >= maxIndex"
          class="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-blue rounded-full w-10 h-10 md:w-9 md:h-9 flex items-center justify-center shadow transition-colors disabled:opacity-30"
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
            i - 1 === current ? 'bg-brand-blue' : 'bg-gray-300 hover:bg-gray-400',
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
      @touchstart.passive="onLightboxTouchStart"
      @touchend.passive="onLightboxTouchEnd"
    >
      <img
        :src="images[lightboxIndex]"
        :alt="`Gallery image ${lightboxIndex + 1}`"
        class="max-w-[92vw] max-h-[80vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl"
      />

      <!-- Image counter -->
      <p class="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {{ lightboxIndex + 1 }} / {{ images.length }}
      </p>

      <!-- Close — larger on mobile -->
      <button
        @click="closeLightbox"
        class="absolute top-3 right-3 md:top-4 md:right-4 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center"
        aria-label="Close"
      >
        <X :size="20" />
      </button>

      <!-- Prev -->
      <button
        @click="lightboxPrev"
        :disabled="lightboxIndex === 0"
        class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-11 h-11 flex items-center justify-center disabled:opacity-20"
        aria-label="Previous"
      >
        <ChevronLeft :size="24" />
      </button>

      <!-- Next -->
      <button
        @click="lightboxNext"
        :disabled="lightboxIndex === images.length - 1"
        class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-11 h-11 flex items-center justify-center disabled:opacity-20"
        aria-label="Next"
      >
        <ChevronRight :size="24" />
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { ChevronLeft, ChevronRight, X } from "lucide-vue-next";

import img1 from "../../assets/gallery/89961423_1076378259365236_1690359764606779392_n.jpg";
import img2 from "../../assets/gallery/90342090_1076378302698565_744315044963024896_n.jpg";
import img3 from "../../assets/gallery/90202485_1076378336031895_2467024318559682560_n.jpg";
import img4 from "../../assets/gallery/85210064_1076378692698526_7755053143624253440_n.jpg";
import img5 from "../../assets/gallery/88124934_1076378586031870_2530928591496019968_n.jpg";

const images = [img1, img2, img3, img4, img5];
const current = ref(0);

const windowWidth = ref(window.innerWidth);
const onResize = () => { windowWidth.value = window.innerWidth; };
onMounted(() => window.addEventListener("resize", onResize));
onUnmounted(() => window.removeEventListener("resize", onResize));

const perPage = computed(() => (windowWidth.value >= 768 ? 3 : 1));
const maxIndex = computed(() => images.length - perPage.value);

function prev() { current.value = Math.max(0, current.value - 1); }
function next() { current.value = Math.min(maxIndex.value, current.value + 1); }

// Swipe support for carousel
let touchStartX = 0;
function onTouchStart(e: TouchEvent) { touchStartX = e.changedTouches[0].clientX; }
function onTouchEnd(e: TouchEvent) {
  const delta = touchStartX - e.changedTouches[0].clientX;
  if (delta > 40) next();
  else if (delta < -40) prev();
}

// Lightbox
const lightboxIndex = ref<number | null>(null);
function openLightbox(i: number) { lightboxIndex.value = i; }
function closeLightbox() { lightboxIndex.value = null; }
function lightboxPrev() {
  if (lightboxIndex.value !== null && lightboxIndex.value > 0) lightboxIndex.value--;
}
function lightboxNext() {
  if (lightboxIndex.value !== null && lightboxIndex.value < images.length - 1) lightboxIndex.value++;
}

// Swipe support for lightbox
let lbTouchStartX = 0;
function onLightboxTouchStart(e: TouchEvent) { lbTouchStartX = e.changedTouches[0].clientX; }
function onLightboxTouchEnd(e: TouchEvent) {
  const delta = lbTouchStartX - e.changedTouches[0].clientX;
  if (delta > 40) lightboxNext();
  else if (delta < -40) lightboxPrev();
}
</script>
