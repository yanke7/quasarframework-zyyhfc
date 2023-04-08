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
    children: [
      { path: '', component: () => import('pages/Customers/CustomersAdd.vue') },
    ],
  },

  {
    path: '/customers/all',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Customers/CustomersAll.vue') },
    ],
  },

  {
    path: '/customers/report',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Customers/CustomersReport.vue') },
    ],
  },

  {
    path: '/customers/edit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Customers/CustomersEdit.vue') },
    ],
  },

  //Product Routes
  {
    path: '/products/add',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Products/ProductsAdd.vue') },
    ],
  },

  {
    path: '/products/edit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Products/ProductsEdit.vue') },
    ],
  },

  {
    path: '/products/all',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Products/ProductsAll.vue') },
    ],
  },

  {
    path: '/products/report',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Products/ProductsReport.vue') },
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

  {
    path: '/suppliers/edit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Suppliers/SuppliersEdit.vue'),
      },
    ],
  },

  {
    path: '/suppliers/report',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Suppliers/SuppliersReport.vue'),
      },
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
