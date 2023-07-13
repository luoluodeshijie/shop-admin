import { defineStore } from 'pinia'

export interface State {
  isCollapse: boolean
}

export const useMainStore = defineStore({
  id: 'main',
  state: (): State => ({
    isCollapse: false
  }),
  actions: {
    setIsCollapse (payload: boolean) {
      this.isCollapse = payload
    }
  }
})
