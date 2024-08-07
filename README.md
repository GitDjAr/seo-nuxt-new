# Happy Paws - 使用Nuxt和Tailwind CSS的全栈、SEO友好、高性能应用

这是一个使用Nuxt 3全栈(SPA-SSR)开发的宠物领养组织应用。宠物数据通过服务器路由(由Nitro驱动)的API获取,静态生成的文章从外部REST API源获取,博客使用markdown文件编写,所有内容都使用Tailwind CSS的强大功能和美观性进行样式设计。

这是一个使用[Vue Designer Nuxt Tailwind CSS - 快速启动模板](https://github.com/pinegrow/pg-nuxt-tailwindcss)创建的示例项目。

演示 - https://happy-paws-with-nuxt-tailwindcss.netlify.app/

## Vue Designer

这是一个由[Pinegrow](https://pinegrow.com/)开发的支持Mac、Windows和Linux的Vue应用桌面可视化编辑器。您可以在[Vue Designer](https://maki_he.com)免费试用!

它允许您可视化设计🎨您的Vue单文件组件,并在构建基于组件的Vue应用时提高您的生产力和创造力。

它智能地集成了⚡️[Vite](https://vitejs.dev/)基础的CLI,并通过其强大的可视化控件和功能提供了惊人的开发体验。

干净的代码😃,无锁定 - 您可以完全控制您的项目和开发工作流程❤️

## 立即尝试!

### 1. 克隆到本地

[在GitHub上从此模板创建仓库](https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss/generate)。

(或者)

如果您更喜欢手动操作并保持较干净的git历史记录

```bash
npx giget@latest gh:pinegrow/happy-paws-with-nuxt-tailwindcss my-happy-paws-with-nuxt-tailwindcss-app #项目名称
cd my-happy-paws-with-nuxt-tailwindcss-app
npm install #或使用pnpm
```

## 2. 在Vue Designer中打开

在Vue Designer中打开您的项目,并按照配置面板中显示的说明进行操作(应该会自动弹出)。配置面板⚙️显示了关键包以及各个生态系统和社区的各种链接。

## 使用方法

### 启动开发服务器

```bash
npm run dev
```

### 构建

```bash
npm run build # SPA SSR,
npm run generate # SPA SSG (完全静态)
```

### 分析

```bash
npm run analyze # 包大小分析
```

### 预览

```bash
npm run now # 构建和预览
```

### Lighthouse

```bash
npm run unlighthouse # 使用来自https://unlighthouse.dev/的npx unlighthouse对整个站点(所有页面)运行lighthouse
```

### 部署到Netlify

您可以通过点击此按钮将此仓库部署为您自己的站点以进行探索和实验。
[![部署到Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Pinegrow/happy-paws-with-nuxt-tailwindcss)

查看[部署文档](https://nuxt.com/docs/getting-started/deployment)以获取更多信息。

## 预装内容

### 元框架(基于Vue)

- [Nuxt](https://nuxt.com/) - 直观的Vue框架
  - 👉 查看Nuxt文档以了解令人惊叹的[功能](https://nuxt.com/docs/getting-started/introduction)列表。
  - 🚦 [Nuxt-Router](https://nuxt.com/docs/getting-started/routing),基于官方[Vue-Router](https://vuejs.org/guide/introduction.html),支持基于文件的路由。
  - SSR友好的`useState`组合式API,用于在组件之间共享状态。

### UI框架

- [Tailwind CSS](https://tailwindcss.com/docs/guides/nuxtjs#3) - 令人惊叹的实用优先CSS框架。

### 基于文件的CMS(markdown)

- [Nuxt Content](https://github.com/nuxt/content) - 由Markdown和Vue组件驱动的基于文件的CMS。注意:本页面就是一个markdown文件🗒。

### 图标

- [UnoCSS Preset Icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - 使用超过100,000个开源[Iconify](https://iconify.design/)图标。使用**unocss**格式的图标名称,例如`i-mdi-home`。

### 模块/插件

- [Pinegrow Nuxt模块](https://www.npmjs.com/package/@pinegrow/nuxt-module) - 使您能够在Vue Designer中可视化地实时设计Vue单文件组件。
- [Pinegrow Tailwind CSS插件](https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin) - 通过设计面板,启用可视化控件自定义(自动)和主题自定义(可选)。
- [VueUse](https://vueuse.org/) - 基本Vue组合式工具集合。
- 🍍 [Pinia](https://pinia.vuejs.org/ssr/nuxt.html) 用于全局状态管理,通过`@pinia/nuxt模块`。它轻量、类型安全、可扩展、模块化,支持vue-devtools。
- [VeeValidate](https://vee-validate.logaretm.com/v4/integrations/nuxt/) 处理值跟踪、验证、错误、提交等。
- [Nuxt Image](https://image.nuxt.com/) - Nuxt应用的即插即用图像优化。
- [Nuxt SEO](https://nuxtseo.com/) - 一个令人惊叹的手工制作的Nuxt模块集合,用于所有SEO需求,具有统一的站点配置。包括`nuxt-site-config`、`nuxt-simple-robots`、`nuxt-simple-sitemap`、`nuxt-og-image`、`nuxt-link-checker`、`nuxt-seo-experiments`、`nuxt-schema-org`。
  - 在开发过程中,可以使用nuxt-devtools预览OG图像和nuxtseo功能。OG图像也可以使用这种形式的URL查看 - `/__og-image__/image/<path>/og.<extension>`

### 开发工具

- [Nuxt Devtools](https://devtools.nuxtjs.org) - 通过一组令人惊叹的应用内功能增强您的DX(开发者体验)。
- [Vue Devtools](https://devtools.vuejs.org/guide/installation.html#standalone) - 官方开发工具,可以作为独立应用与Vue Designer一起使用。它被配置为Nuxt插件(仅在开发过程中)。
  - **需要操作**: 目前已停用。在`plugins/devtools.client.ts`中取消注释以激活。

### VS Code扩展

- [VS Code扩展](./.vscode/extensions.json & ./.vscode/settings.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 编码风格

- 使用组合式API和[`<script setup>` SFC语法](https://vuejs.org/guide/scaling-up/sfc.html)
- [ESLint](https://eslint.org)使用[@nuxt/eslint](https://eslint.nuxt.com/packages/module) Nuxt ESLint模块,采用ESLint 9并使用新的平面配置。
- [Prettier](https://prettier.io)与[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - 格式化而不与eslint规则冲突。

### TypeScript

此项目允许JS,并且已关闭严格模式。根据需要更新`tsconfig.ts`。

```json
{
  // https://nuxt.com/docs/guide/concepts/typescript
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "strict": false
  }
}
```

## 功能详情

- 首页介绍
- 关于我们
- 支付页面
- 文章页面
- 付费文章页面
- 付费资源
- 引流公众号
- 引流群
