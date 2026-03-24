import { defineStore } from 'pinia'
import type { Company } from '../types'
import data from '../../data/company.json'

export const useCompanyStore = defineStore('company', {
  state: (): Company => ({ ...(data as Company) }),
})
