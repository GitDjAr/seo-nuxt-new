<script setup lang="ts">
  import { user_avatar } from '../../themes/pg-tailwindcss/tokens.mjs'
</script>
<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-xl text-center">
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-primary-500 dark:text-purple-300 sm:text-4xl"
      >
        清单收到了很多用户的好评
      </p>
    </div>
    <div
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
    >
      <figure
        class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1"
      >
        <blockquote
          class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8"
        >
          <p>
            “购买了这个副业清单，我才知道有这么多副业可选！清单详尽地列出了操作步骤和成本投入，非常适合我这样的职场新手同时又想有PlanB的人！”
          </p>
        </blockquote>
        <figcaption
          class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap"
        >
          <img
            class="h-10 w-10 flex-none rounded-full bg-gray-50"
            :src="user_avatar[4]"
            alt=""
          />
          <div class="flex-auto">
            <div class="font-semibold">澳瑞白</div>
            <div class="text-gray-600">@澳瑞白.</div>
          </div>
          <img class="h-10 w-auto flex-none" alt="" />
        </figcaption>
      </figure>
      <div class="space-y-8 xl:contents xl:space-y-0">
        <div class="xl:row-span-2 space-y-8">
          <figure
            class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
          >
            <blockquote class="text-gray-900">
              <p>
                “这份副业清单绝对是物超所值！详细的副业分析和预计收入让我对每个副业的潜力有了清晰的认识，也帮我规避了很多不必要的风险。感谢这个网站提供了这么实用的资源”
              </p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img
                class="h-10 w-10 rounded-full bg-gray-50"
                :src="user_avatar[0]"
                alt=""
              />
              <div>
                <div class="font-semibold">科技创世</div>
                <div class="text-gray-600">@科技创世</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="xl:row-start-1 space-y-8">
          <figure
            class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
          >
            <blockquote class="text-gray-900">
              <p>
                “它不仅提供了丰富的副业选择，还有简单的操作指南和成本分析。对于我们这些想要在工作之余增加收入的人来说，宝藏了！”
              </p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img
                class="h-10 w-10 rounded-full bg-gray-50"
                :src="user_avatar[1]"
                alt=""
              />
              <div>
                <div class="font-semibold">没有不行</div>
                <div class="text-gray-600">@没有不行</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="space-y-8 xl:contents xl:space-y-0">
        <div class="xl:row-start-1 space-y-8">
          <figure
            class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
          >
            <blockquote class="text-gray-900">
              <p>
                “购买这个副业清单是我做过的最好的投资之一。它根据不同人群提供了精准的副业推荐，让我找到了最适合自己的副业路径。现在我已经开始获得额外的收入，非常满意这个清单的帮助。”
              </p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img
                class="h-10 w-10 rounded-full bg-gray-50"
                :src="user_avatar[2]"
                alt=""
              />
              <div>
                <div class="font-semibold">雪鸟</div>
                <div class="text-gray-600">@雪鸟</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="xl:row-span-2 space-y-8">
          <figure
            class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
          >
            <blockquote class="text-gray-900">
              <p>“这份副业清单非常全面，我开始做小红书盈利了！”</p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-x-4">
              <img
                class="h-10 w-10 rounded-full bg-gray-50"
                :src="user_avatar[3]"
                alt=""
              />
              <div>
                <div class="font-semibold">火星小贝</div>
                <div class="text-gray-600">@火星贝</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
