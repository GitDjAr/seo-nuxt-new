// 由于默认情况下不包含`.js、.ts`文件，
// 以下注释告诉 UnoCSS 强制扫描此文件（以选择徽标图标）。
// @unocss-include

export default {
  name: '副业精选',
  description: 'Adopt Your Fur Mate',
  logo: 'i-noto:cat-face',
  author: 'Pinegrow',
  url: 'https://happy-paws-with-nuxt-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Adopt Now', link: '/adopt', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Donate',
      link: '/quick-start',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Articles',
      link: '/articles',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
    { text: 'Blog', link: '/blog', type: 'secondary', icon: 'i-mdi-home' },
    {
      text: 'Volunteer',
      link: '/volunteer',
      type: 'secondary',
      icon: 'i-mdi-home',
    },
  ],
}
