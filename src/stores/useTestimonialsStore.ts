import { defineStore } from 'pinia'
import type { Testimonial } from '../types'
import data from '../../data/testimonials.json'

export const useTestimonialsStore = defineStore('testimonials', {
  state: (): { testimonials: Testimonial[] } => ({ testimonials: data as Testimonial[] }),
})
