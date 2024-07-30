<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroCaption = '领养宠物'
  const heroTitle = '数千只无家可归的狗，一项善举'
  const heroDescription =
    '今天就找到你的毛茸茸的新朋友吧！我们有各种各样的可爱宠物可供领养。快来拜访我们并将您最好的新朋友带回家！'
</script>
<template>
  <section class="container mx-auto pb-12 px-4">
    <BackgroundImageWrapper :image-url="heroImageUrl" class="rounded-3xl">
      <div class>
        <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
          <div
            class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
          >
            <div class="px-4 w-full md:w-8/12 xl:w-6/12">
              <h4
                class="font-bold font-serif mb-1 text-primary-600 dark:text-primary-200 uppercase"
              >
                领养宠物
              </h4>
              <h1 class="capitalize leading-tight mb-2 text-white">
                数千只无家可归的狗，一项善举
              </h1>
              <p class="font-thin mb-6 text-gray-300">
                今天就找到你的毛茸茸的新朋友吧！我们有各种各样的
                可爱的宠物可供领养。来参观我们并带回家 你最好的新朋友！
              </p>
              <BaseButton
                size="xl"
                label="Adopt Now"
                target="_blank"
                to="https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">Adopt Now</div>
                <BaseIcon name="i-noto-dog-face" height="28px" />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
