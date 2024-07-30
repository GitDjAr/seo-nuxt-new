import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // 1. 状态（ref、reactive 等）/getters（计算）
  const count = ref(0)
  const getCount = computed(() => count.value)

  // 2. 动作（功能）
  const increment = () => (count.value += 1)
  const decrement = () => (count.value -= 1)

  return {
    count,
    getCount,
    increment,
    decrement,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useCounterStore as any, import.meta.hot),
  )
}
