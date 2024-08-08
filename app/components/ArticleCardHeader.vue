<script setup lang="ts">
  const props = defineProps({
    cover: {
      type: String,
      default: 'https://pinegrow.com/placeholders/img18.jpg',
    },
  })

  const bgCover = computed(() => {
    return `url(${props.cover})`
  })
</script>
<template>
  <section class="cover relative">
    <div class="h-40 pl-10 pt-20">
      <BaseButton to="/articles">
        <span>&lt;- Go Back</span>
      </BaseButton>
    </div>
    <IconLogo class="!w-16 !h-16" />
  </section>
</template>
<style scoped>
  .cover {
    z-index: 0;
  }

  .cover:before {
    background-image: v-bind(bgCover) !important;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    filter: blur(0px);
  }
</style>
