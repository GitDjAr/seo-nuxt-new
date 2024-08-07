// 由于默认情况下不包含`.js、.ts`文件，
// 以下注释告诉 UnoCSS 强制扫描此文件（以选择徽标图标）。
// @unocss-include

export default {
  name: 'Happy Paws',
  description: '',
  logo: 'i-fa6-solid-piggy-bank',
  author: 'Pinegrow',
  url: 'https://happy-paws-with-nuxt-tailwindcss.netlify.app',
  github: 'https://github.com/GitDjAr/seo-nuxt-new',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@maki_he',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: '首页', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: '立即采用', link: '/adopt', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Donate',
      link: '/quick-start',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    {
      text: '文章',
      link: '/articles',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    { text: 'Blog', link: '/blog', type: 'secondary', icon: 'i-mdi-home' },
    {
      text: '志愿者',
      link: '/volunteer',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
  ],
}
