
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'em-construcao', component: () => import('pages/UnderConstruction.vue') },
      { path: 'desenvolvimento-sistemas', component: () => import('pages/UnderConstruction.vue') },
      { path: 'auth-login', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/consultoria',
    component: () => import('layouts/InnerLayout.vue'),
    children: [
      { path: 'info', component: () => import('pages/ConsultingPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
