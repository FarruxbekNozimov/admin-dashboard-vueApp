import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRightbarStore = defineStore('rightbar', () => {
  const rightbar = ref(false)

  const RIGHTBAR = computed(() => rightbar.value)

  function toggleRightbar() {
    rightbar.value = !rightbar.value
  }

  return { RIGHTBAR, toggleRightbar }
})
