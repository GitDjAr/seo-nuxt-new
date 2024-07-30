<script setup lang="ts">
  const counterStore = useCounterStore()

  /*1. Pinia 存储状态（参考、反应、计算等）*/
  //❌ 坏（无反应）：
  //const { count, getCount, getDoubleCount } = counterStore
  //✔️ 好：
  const { count, getCount } = storeToRefs(counterStore)

  //计数是反应性的
  const getDoubleCount = computed(() => count.value * 2)

  /*2. Pinia商店行动*/
  const { increment, decrement } = counterStore
</script>

<template>
  <div>
    <span>穿越不同的路线，pinia店的这个柜台是 保留</span>
    <BaseButton
      variant="soft"
      style="margin-left: 10px; margin-right: 10px"
      @click="decrement"
      >-</BaseButton
    >
    <span style="min-width: 20px; display: inline-block; text-align: center">{{
      count
    }}</span>

    <BaseButton
      variant="soft"
      style="margin-left: 10px; margin-right: 10px"
      @click="increment"
      >+</BaseButton
    >
  </div>
</template>

<style scoped></style>
