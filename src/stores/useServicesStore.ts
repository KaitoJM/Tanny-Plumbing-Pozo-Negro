import { defineStore } from 'pinia'
import type { Service } from '../types'
import data from '../../data/services.json'

export const useServicesStore = defineStore('services', {
  state: (): { services: Service[] } => ({ services: data as Service[] }),
})
