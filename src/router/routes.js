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
        path: '/maps/mapsview',
        component: () => import('pages/Maps/Mapsview.vue'),
      },
      {
        path: '/maps/markermap',
        component: () => import('pages/Maps/MarkerMap.vue'),
      },
      {
        path: '/maps/streetview',
        component: () => import('pages/Maps/Streetview.vue'),
      },
      {
        path: '/warehouses/warehouseadd',
        component: () => import('pages/Warehouses/WarehouseAdd.vue'),
      },
      {
        path: '/manufacturer/manufacturersadd',
        component: () => import('pages/Manufacturer/ManufacturerAdd.vue'),
      },
      {
        path: '/manufactureradd',
        component: () => import('pages/Manufacturer/ManufacturerAdd.vue'),
      },
      {
        path: '/jobsitesadd',
        component: () => import('pages/JobSites/JobSitesAdd.vue'),
      },
      {
        path: '/jobsites/all',
        component: () => import('pages/JobSites/JobSitesAll.vue'),
      },
      {
        path: '/vehicles/add',
        component: () => import('pages/Vehicles/VehiclesAdd.vue'),
      },
      {
        path: '/safety/add',
        component: () => import('pages/Safety/JobSiteSafetyAdd.vue'),
      },
      {
        path: '/safety/toolboxadd',
        component: () => import('pages/Safety/ToolBoxTalkAdd.vue'),
      },
      {
        path: '/tools/add',
        component: () => import('pages/Tools/ToolsAdd.vue'),
      },
      {
        path: '/purchases/add',
        component: () => import('pages/Purchases/PurchasesAdd.vue'),
      },
      {
        path: '/purchases/all',
        component: () => import('pages/Purchases/PurchasesAll.vue'),
      },
      {
        path: '/purchases/edit',
        component: () => import('pages/Purchases/PurchasesEdit.vue'),
      },
      {
        path: '/vehicles/maintenanceadd',
        component: () => import('pages/Vehicles/VehicleMaintenanceAdd.vue'),
      },
      {
        path: '/cable/add',
        component: () => import('pages/Cable/CableAdd.vue'),
      },
      {
        path: '/tasks/add',
        component: () => import('pages/Tasks/TaskAdd.vue'),
      },
      {
        path: '/planners',
        component: () => import('pages/PlannersPage.vue'),
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
