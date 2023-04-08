const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  //Customer Routes
  {
    path: '/customers/add',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Customers/CustomersAdd.vue') }],
  },

  //Product Routes
  {
    path: '/products/add',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Products/ProductsAdd.vue') },
    ],
  },
  
//Supplier Routes
  {
    path: '/suppliers/add',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Suppliers/SuppliersAdd.vue') },
    ],
  },

  {
    path: '/suppliers/all',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Suppliers/SuppliersAll.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
