<script setup lang="ts"></script>
<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <NuxtLink class="-ml-6" to="/">
            <div to="/" class="font-serif inline-flex items-center text-3xl">
              <h6
                class="font-serif inline-flex items-center text-3xl text-primary"
              >
                AI副业
              </h6>
              <h6 class="pl-3">
                <IconLogo class="!w-16 !h-16" />
              </h6>
            </div>
          </NuxtLink>
          <div class="mt-2 text-center w-full lg:text-left">
            一个专注于
            <b class="text-primary-600">人工智能(AIGC)</b> 技术及其应用
            <b class="text-primary-600">(副业探索)</b>的社区
            <p class="my-1">低成本,低门槛的操作方式</p>
            我们的目标是让每个用户都享受到ai带来的
            <b class="text-primary-600">机遇</b>
          </div>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <NuxtLink
                href="https://twitter.com/maki_he"
                aria-label="twitter"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-twitter"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://space.bilibili.com/43090668?spm_id_from=..0.0"
                aria-label="bilibili"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-ri-bilibili-line"
                  class="text-2xl !text-primary-700"
                  width="28px"
                />
              </NuxtLink>
              <NuxtLink
                href="https://www.youtube.com/@maki_he"
                aria-label="youtube"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-youtube-icon"
                  class="text-2xl"
                  width="28px"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="my-6 text-center">
            <NuxtLink to="/">18881732196</NuxtLink>
            <br />
            <NuxtLink to="/">xdj773750101@gmail.com</NuxtLink>
          </div>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            一般
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink
                to="/"
                class="hover:text-primary-600 dark:text-primary-200"
                >常见问题</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/"
                class="hover:text-primary-600 dark:text-primary-200"
                >新闻</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/"
                class="hover:text-primary-600 dark:text-primary-200"
                >职业生涯</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/"
                class="hover:text-primary-600 dark:text-primary-200"
                >联系我</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start"
        >
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            链接
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink
                to="/adopt"
                class="hover:text-primary-600 dark:text-primary-200"
                >立即领养</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/quick-start"
                class="hover:text-primary-600 dark:text-primary-200"
                >捐赠</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/articles"
                class="hover:text-primary-600 dark:text-primary-200"
                >文章</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/blog"
                class="hover:text-primary-600 dark:text-primary-200"
                >Blog</NuxtLink
              >
            </li>
            <li class="mb-4">
              <NuxtLink
                to="/volunteer"
                class="hover:text-primary-600 dark:text-primary-200"
                >订阅我们</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center p-4 w-full md:w-1/3">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            业务
          </h2>
          <div class="-mx-2 flex flex-wrap items-center lg:mt-2">
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDF8fHBldHxlbnwwfHx8fDE2MzA0NjI1MjM&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE1fHxjYXR8ZW58MHx8fHwxNjMwNDY3NzE4&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIzfHxwZXR8ZW58MHx8fHwxNjMwNDYyNTIz&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDI3fHxjYXR8ZW58MHx8fHwxNjMwNDY3NzE4&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDI4fHxwZXR8ZW58MHx8fHwxNjMwNDYyNTIz&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1591561582301-7ce6588cc286?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxyYWJiaXR8ZW58MHx8fHwxNjMwNDY3NjUw&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; 2020 - 2030。保留所有权利
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
