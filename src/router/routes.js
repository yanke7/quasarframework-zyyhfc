const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/customers/add',
        component: () => import('pages/Customers/CustomersAdd.vue'),
      },
      {
        path: '/customers/all',
        component: () => import('pages/Customers/CustomersAll.vue'),
      },
      {
        path: '/customers/report',
        component: () => import('pages/Customers/CustomersReport.vue'),
      },
      {
        path: '/customers/edit',
        component: () => import('pages/Customers/CustomersEdit.vue'),
      },
      {
        path: '/products/add',
        component: () => import('pages/Products/ProductsAdd.vue'),
      },
      {
        path: '/products/all',
        component: () => import('pages/Products/ProductsAll.vue'),
      },
      {
        path: '/products/edit',
        component: () => import('pages/Products/ProductsEdit.vue'),
      },
      {
        path: '/products/setup',
        component: () => import('pages/Products/ProductsSetup.vue'),
      },
      {
        path: '/products/reports',
        component: () => import('pages/Products/ProductsReports.vue'),
      },
      {
        path: '/suppliers/add',
        component: () => import('pages/Suppliers/SuppliersAdd.vue'),
      },
      {
        path: '/suppliers/all',
        component: () => import('pages/Suppliers/SuppliersAll.vue'),
      },
      {
        path: '/suppliers/edit',
        component: () => import('pages/Suppliers/SuppliersEdit.vue'),
      },
      {
        path: '/suppliers/setup',
        component: () => import('pages/suppliers/SuppliersSetup.vue'),
      },
      {
        path: '/suppliers/reports',
        component: () => import('pages/suppliers/SuppliersReports.vue'),
      },
      {
        path: '/maps/maps',
        component: () => import('pages/Maps/Maps.vue'),
      },      {
        path: '/maps/markermap',
        component: () => import('pages/Maps/MarkerMap.vue'),
      },      {
        path: '/maps/streetview',
        component: () => import('pages/Maps/Streetview.vue'),
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
