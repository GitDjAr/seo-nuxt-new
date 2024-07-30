<script setup>
  const { img, action, to } = defineProps({
    img: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  })

  const { optimizeImage } = useOptimizeImage()
  const imageOptimized = computed(() => {
    return {
      alt: action,
      cover: true,
      ...optimizeImage(
        img,
        /*选项*/
        {
          //placeholder: false, //实际图像完全加载之前的占位符图像。
        },
        true /*返回背景样式*/,
      ),
    }
  })

  const bgStyles = imageOptimized.value.bgStyles
</script>
<template>
  <div class="pb-4 px-4 rounded-3xl w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
    <div
      class="bg-cover bg-no-repeat flex pb-4 pt-96 px-4 rounded-3xl"
      :style="bgStyles"
    >
      <NuxtLink :to="to" class="group mx-auto w-5/6">
        <BaseButton size="xl" class="font-semibold rounded-lg w-full" block>
          <div class="font-semibold my-2 text-center">
            {{ action }}
          </div>
        </BaseButton>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped></style>
