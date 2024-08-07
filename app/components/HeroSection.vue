<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroCaption = '领养宠dddddd物'
  const heroTitle = '测试呀是不是titie'
  const heroDescription = '今天就asdfasdfasdf新朋友带回家！'
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
              <h3
                class="font-bold font-serif mb-1 text-primary-600 dark:text-primary-200 uppercase"
              >
                2024年最新副业合集
              </h3>
              <h1 class="capitalize leading-tight py-4 text-white">
                呕血之作, 为每一位用户提供最新最简单的副业!
              </h1>
              <p class="font-thin mb-6 text-gray-300">
                90+真实副业资源、15+副业分类、预估收入/成本，具有操作步骤和建议学习资源。帮助你在2024年找到最适合自己的副业！
              </p>
              <BaseButton
                size="xl"
                label="让我们开始"
                target="_blank"
                to="https://github.com/GitDjAr/seo-nuxt-new"
              >
                <div class="inline-block ml-1 p-1.5 text-lg">让我们开始</div>
                <BaseIcon height="28px" />
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImageWrapper>
  </section>
</template>
<style scoped></style>
