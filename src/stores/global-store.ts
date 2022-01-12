import type { Account } from 'near-api-js'
import { writable } from 'svelte/store'

interface IGlobalStore {
  account?: Account
}

export const GlobalStore = writable<IGlobalStore>({})
