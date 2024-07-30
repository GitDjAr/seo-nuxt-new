<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const props = defineProps({
    imageUrl: {
      type: String,
      default: heroImageUrl,
    },
    alt: {
      type: String,
      default: 'hero',
    },
    cover: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: [Boolean, String],
      default: false,
    },
  })

  const { optimizeImage } = useOptimizeImage()
  const imageOptimized = {
    alt: props.alt,
    cover: props.cover,
    ...optimizeImage(
      props.imageUrl,
      /*选项*/
      {
        //placeholder: false, //实际图像完全加载之前的占位符图像。
        placeholder: props.placeholder, //实际图像完全加载之前的占位符图像。
      },
      true /*返回背景样式*/,
    ),
  }

  //const HeroImage = imageOptimized.src
  const bgStyles = imageOptimized.bgStyles
</script>
<template>
  <div class="bg-center bg-cover bg-no-repeat blur-none z-0" :style="bgStyles">
    <!--<div
类 =“bg-center bg-cover bg-no-repeat 模糊-none z-0 bg-design-image lg：bg-design-image-large”
>-->
    <slot />
  </div>
</template>
<style scoped></style>
