<script setup lang="ts">
  const { somePets: pets } = await usePets()
</script>
<template>
  <div class="bg-primary-100 dark:bg-primary-700">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"
        >
          <div class="px-4 text-center w-full">
            <h6 class="text-primary-100 dark:text-primary-700 uppercase">
              领养宠物
            </h6>
            <h3 class="capitalize">小举动产生大影响</h3>
            <p class="mb-4">
              客户很重要，有了客户才会跟着客户。没有人 生活作业
            </p>
          </div>
          <div class="px-4 text-center w-full">
            <BaseButton size="xl" to="/adopt" color="primary"
              ><span>认识他们所有人</span>
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <PetCard v-for="(pet, index) in pets" :key="index" v-bind="pet" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
