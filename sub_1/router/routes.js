const BASE = window.__POWERED_BY_QIANKUN__ ? '' : ''

function dynamicImport(path) {
  return import(`~/views/${path}/index.vue`).then((m) => m.default || m)
}

const resolveRoute = (route) => ({
  ...route,
  component: () => dynamicImport(route.component),
})

function dynamicImportRoute(routes) {
  return routes.map((route) => ({
    ...resolveRoute(route),
    children: route.children ? route.children.map(resolveRoute) : [],
  }))
}

const routes = [
  {
    path: `${BASE}/`,
    name: 'login',
    component: 'login',
    alias: `${BASE}`,
  },
]

export default dynamicImportRoute(routes)
