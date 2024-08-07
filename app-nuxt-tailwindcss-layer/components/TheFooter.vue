<script setup lang="ts">
  // ...
</script>

<template>
  <footer class="pb-24 pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap justify-center space-x-8">
        <NuxtLink
          href="https://twitter.com/maki_he"
          aria-label="twitter"
          external
          target="_blank"
        >
          <BaseIcon name="i-logos-twitter" class="text-2xl" width="28px" />
        </NuxtLink>
        <NuxtLink
          href="https://space.bilibili.com/43090668?spm_id_from=..0.0"
          aria-label="discord"
          external
          target="_blank"
        >
          <BaseIcon
            name="i-ri-bilibili-line"
            class="text-2xl"
            color="#02b5da"
            width="28px"
          />
        </NuxtLink>
        <NuxtLink
          href="https://www.youtube.com/@maki_he"
          aria-label="youtube"
          external
          target="_blank"
        >
          <BaseIcon name="i-logos-youtube-icon" class="text-2xl" width="28px" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
