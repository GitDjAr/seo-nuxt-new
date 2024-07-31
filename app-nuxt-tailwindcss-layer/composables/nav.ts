import { computed } from 'vue'
import site from '~~/site'

export const useNav = () => {
  const routes = useRouter().getRoutes()

  const navlinksFromRouter = routes
    // 删除隐藏路线
    .filter((route) => route.meta.hidden !== true)
    // 过滤掉以大写字母开头的路由，例如 NotFoundInDev
    .filter(
      (route) => route.name && route.name[0] !== route.name[0].toUpperCase(),
    )
    // 删除动态路由
    .filter((route) => !route.path.includes(':'))
    // 仅包含具有标题的内容（通过页面中的 DefinePageMeta 定义）
    .filter((route) => route.meta.title)
    .filter((route) => route.path !== '/try-now')
    .sort((a, b) =>
      a.meta.navOrder && b.meta.navOrder && +a.meta.navOrder > +b.meta.navOrder
        ? 1
        : -1,
    )
    .map((route) => {
      return {
        text: route.meta.title,
        link: route.meta.name || route.path,
        icon: route.meta.icon,
        type: route.meta.type,
      }
    })

  const navlinksFromConfig = site.nav
  // const navlinks = 计算(() => navlinksFromRouter || navlinksFromConfig)
  // TODO：如果使用动态路由或自定义导航链接，请使用 navlinksFromConfig
  const navlinks = computed(() => navlinksFromConfig || navlinksFromRouter)

  const navlinksPrimary = computed(() => {
    return navlinks.value.filter(
      (navlink) => !navlink.type || navlink.type === 'primary',
    )
  })

  const navlinksSecondary = computed(() => {
    return navlinks.value.filter((navlink) => navlink.type === 'secondary')
  })

  const currentRoute = useRoute()
  const currentPath = computed(() => {
    return currentRoute.path
  })

  return {
    navlinks,
    navlinksPrimary,
    navlinksSecondary,
    currentPath,
  }
}

export const isCurrentRoute = (navlink, currentPath) => {
  if (!currentPath) {
    currentPath = useNav().currentPath.value
  }
  return navlink.link === '/'
    ? currentPath === navlink.link
    : currentPath.startsWith(navlink.link)
}
