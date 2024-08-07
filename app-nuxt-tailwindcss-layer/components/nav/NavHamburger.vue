<script setup lang="ts">
  const { isMobileMenuOpen, openMobileMenu } = useMobileMenu()
</script>

<template>
  <BaseButton
    size="xl"
    :icon="
      isMobileMenuOpen ? 'i-material-symbols-close' : 'i-material-symbols-menu'
    "
    class="!py-2 !rounded-lg leading-none"
    @click="openMobileMenu"
  >
    <span class="sr-only">主菜单</span>
  </BaseButton>
</template>

<style scoped></style>
