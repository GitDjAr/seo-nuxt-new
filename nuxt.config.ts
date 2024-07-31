import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'pathe'
import presetIcons from '@unocss/preset-icons'
import { bundledLanguages } from 'shiki'

import site from './site'
const {
  name,
  description,
  url,
  defaultLocale,
  identity,
  twitter,
  trailingSlash,
  titleSeparator,
} = site

export default defineNuxtConfig({
  extends: [
    './app-nuxt-tailwindcss-layer', // 导航栏和页脚组件
  ],
  // ssr: false,
  // devtools: {enabled: false }, //默认启用，使用独立 Vue devtools 时禁用

  // Nuxt 4 迁移准备工作
  future: {
    compatibilityVersion: 4,
  },
  // Before Nuxt 4 migration
  // srcDir: 'app',
  // serverDir: fileURLToPath(new URL('server', import.meta.url)),
  // dir: {
  //   public: fileURLToPath(new URL('public', import.meta.url)),
  //   modules: fileURLToPath(new URL('modules', import.meta.url)),
  // },
  // },

  experimental: {
    componentIslands: true,
  },

  app: {
    baseURL: '/', // 默认为下一个
    // 其余的请查看 HeadAndMeta.view
    head: {
      meta: [{ charset: 'utf-8' }], // nuxt默认
    },
  },

  modules: [
    '@pinegrow/nuxt-module',
    '@unocss/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    // '@nuxtjs/html-validator',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/fontaine',
    '@nuxtjs/critters',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],
  // https://dev.to/jacobandrewsky/improving-performance-of-nuxt-with-fontaine-5dim
  fontMetrics: {
    fonts: ['Inter', 'Kalam'],
  },

  // https://dev.to/jacobandrewsky/利用 critters 4k8i 优化 nuxt 中的 css 性能
  critters: {
    // 选项直接传递给小动物：https://github.com/GoogleChromeLabs/critters#critters-2
    config: {
      // Default: 'media'
      preload: 'swap',
    },
  },

  css: [
    '@/assets/css/tailwind.css',
    // 'lite-youtube-embed/src/lite-yt-embed.css',
  ],

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          NuxtImg: ['src'],
          OgImage: ['image'],
        },
      },
    },
  },

  image: {
    // dir: 'assets/images', // doesn't always work, for eg, with vercel etc, https://github.com/nuxt/image/issues/1006. Therefore, we are storing the images in public folder, to have them not processed by vite, but rather by nuxt-image module on-demand
    // sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw', // Global sizes not yet supported, has to be specified in NuxtImg or NuxtPicture tags - https://github.com/nuxt/image/issues/216
    // densities: [1,2], // default
    // quality: 80, // can be overridden as NuxtImg prop
    format: ['webp, png, jpg'], // default is ['webp']
    // The screen sizes predefined by `@nuxt/image`:
    // screens: {
    //   xs: 320,
    //   sm: 640,
    //   md: 768,
    //   lg: 1024,
    //   xl: 1280,
    //   xxl: 1536,
    //   '2xl': 1536,
    // },

    // TODO: Currently image optimization is paused until some bugs in Nuxt Image modules are fixed
    // provider: 'ipx',
    provider: 'none',

    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80,
        },
      },
    },
    // netlify: {
    //   baseURL: url,
    // },
    domains: [
      'images.unsplash.com',
      'fakestoreapi.com',
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'gravatar.com',
    ],

    alias: {
      unsplash: 'https://images.unsplash.com',
    },
  },

  veeValidate: {
    // 禁用或启用自动导入
    autoImports: true,
    // 为组件使用不同的名称
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  content: {
    // Nuxt 4 迁移之前
    sources: {
      content: {
        driver: 'fs',
        base: resolve(__dirname, 'app/content'),
      },
    },
    markdown: {
      anchorLinks: false,
      rehypePlugins: [
        [
          'rehype-external-links',
          {
            target: '_blank',
            rel: ['noopener'],
            test: (node: any) => /^https?:\/\//.test(node.properties.href),
          },
        ],
      ],
    },
    highlight: {
      //@ts忽略
      langs: Object.keys(bundledLanguages),
      theme: 'dracula-soft',
    },
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  imports: {
    // 目录：['我的组件']，
    // dirs: ['my-components'],
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'lite-youtube',
    },
  },

  sourcemap: {
    client: false,
    server: false,
  },

  routeRules: {
    '/hidden': { robots: false },
  },

  // 由 @nuxtjs/seo 集合中的所有模块使用 https://nuxtseo.com/nuxt-seo/guides/configuring-modules
  site: {
    url,
    name,
    description,
    defaultLocale,
    // https://nuxtseo.com/nuxt-seo/guides/setting-an-identity
    identity,
    twitter,
    trailingSlash,
    titleSeparator,
  },
  robots: {
    // https://nuxtseo.com/robots/api/config#blocknonseobots
    blockNonSeoBots: true,
  },
  sitemap: {
    // https://nuxtseo.com/sitemap/guides/i18n#debugging-hreflang
    // 打开 {{site.url}}/sitemap.xml
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '12.5%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      {
        label: 'Change Frequency',
        select: 'sitemap:changefreq',
        width: '12.5%',
      },
      { label: 'Hreflangs', select: 'count(xhtml:link)', width: '12.5%' },
    ],
    // 查看 sitemap.xml 时关闭 xls 文件
    // xsl: false,
    // 如果在 documentDriven 模式下使用 nuxt-content，请删除 strictNuxtContentPaths
    strictNuxtContentPaths: true,
  },
  ogImage: {

    // OG images and nuxtseo features can be previewed with nuxt-devtools during development. OG images can also be viewed using URL in this form - `/__og-image__/image/<path>/og.<extension>. For eg, https://happy-paws-with-nuxt-tailwindcss.netlify.app/__og-image__/image/og.png
    // fonts: ['Inter:400', 'Inter:700'],
    //
    // defaults: { width: 1200, height: 600, emojis: 'noto', renderer: 'satori', component: 'NuxtSeo', cacheMaxAgeSeconds: 60 * 60 * 24 * 3 },
    //
    // 在全局级别禁用
    // 运行时缓存存储：假，
  },
  linkChecker: {
    enabled: false,
    excludeLinks: ['https://twitter.com/vuedesigner'],
    report: {
      html: true,
      markdown: true,
    },
  },

  unocss: {
    presets: [
      presetIcons({
        prefix: 'i-', // 默认前缀，请勿更改
      }),
    ],
  },

  eslint: {
    // config: {
    //   stylistic: {
    //     // All are default values
    //     semi: false,
    //     quotes: 'single',
    //     blockSpacing: true,
    //     indent: 2,
    //     commaDangle: 'always-multiline',
    //     // ...
    //   },
    // },
    // ...
  },

  pinegrow: {
    liveDesigner: {
      iconPreferredCase: 'unocss', // 默认值（可以删除），Nuxt UI 使用 unocss 格式作为图标名称
      devtoolsKey: 'devtoolsKey', // 参见plugins/devtools.client.ts
      tailwindcss: {
        /* 请确保更新文件名和路径以准确匹配项目中使用的文件名和路径。*/
        configPath: 'tailwind.config.ts',
        cssPath: '@/assets/css/tailwind.css',
        // themePath: false, //设置为 false 以便不使用设计面板
        // 重新启动配置更新：true，
        restartOnThemeUpdate: true,
      },
      // plugins: [
      //   {
      //     name: 'My Awesome Lib 3.0',
      //     key: 'my-awesome-lib',
      //     pluginPath: fileURLToPath(
      //       new URL('./web-types/my-awesome-lib.json', import.meta.url),
      //     ),
      //   },
      // ],
    },
  },
})
