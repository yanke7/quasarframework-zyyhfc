<template>
  <div>
    <q-item v-for="(section, sectionIndex) in menuSections" :key="sectionIndex">
      <q-item-section>
        <q-expansion-item :label="section.label" class="header-item">
          <q-item
            v-for="(item, itemIndex) in section.items"
            :key="itemIndex"
            :to="item.to"
            clickable
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ item.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'MenuLinksComponent',
  data() {
    return {
      menuSections: [
        {
          label: 'Jobs',
          items: [
            {
              to: '/jobsites/all',
              icon: 'view_list',
              label: 'All Jobs',
            },
            {
              to: '/jobsitesadd',
              icon: 'add',
              label: 'Add Job',
            },
            {
              to: '/jobsites/reports',
              icon: 'description',
              label: 'Job Reports',
            },
          ],
        },
        {
          label: 'Customers',
          items: [
            {
              to: '/customers/all',
              icon: 'view_list',
              label: 'Customer List',
            },
            {
              to: '/customers/add',
              icon: 'add',
              label: 'Add Customer',
            },
            {
              to: '/customers/reports',
              icon: 'description',
              label: 'Reports',
            },
          ],
        },
        {
          label: 'Products',
          items: [
            {
              to: '/products/all',
              icon: 'view_list',
              label: 'All Products',
            },
            {
              to: '/products/add',
              icon: 'add',
              label: 'Add Product',
            },
            {
              to: '/products/reports',
              icon: 'description',
              label: 'Report',
            },
            {
              to: '/products/setup',
              icon: 'phonelink_setup',
              label: 'Setup Products',
            },
            {
              to: '/manufacturer/manufacturersadd',
              icon: 'precision_manufacturing',
              label: 'Manufacturer Add',
            },
            {
              to: '/manufacturers/all',
              icon: 'account_tree',
              label: 'Manufacturers',
            },
          ],
        },
        {
          label: 'Purchases',
          items: [
            {
              to: '/purchases/all',
              icon: 'view_list',
              label: 'Purchase List',
            },
            {
              to: '/purchases/add',
              icon: 'view_list',
              label: 'Purchase Orders',
            },
            {
              to: '/suppliers/all',
              icon: 'view_list',
              label: 'Supplier List',
            },
            {
              to: '/suppliers/add',
              icon: 'add',
              label: 'Add Supplier',
            },
            {
              to: '/supplier/reports',
              icon: 'description',
              label: 'Reports',
            },
          ],
        },
        {
          label: 'Maps',
          items: [
            {
              to: '/maps/mapsview',
              icon: 'view_list',
              label: 'Map View',
            },
            {
              to: '/maps/markermap',
              icon: 'add',
              label: 'Marker Map',
            },
            {
              to: '/maps/streetview',
              icon: 'description',
              label: 'StreetView',
            },
          ],
        },
        {
          label: 'Inventory',
          items: [
            {
              to: '/inventory/all',
              icon: 'view_list',
              label: 'Inventory List',
            },
            {
              to: '/warehouses/warehouseadd',
              icon: 'add',
              label: 'Warehouses',
            },
            {
              to: '/inventory/reports',
              icon: 'description',
              label: 'Reports',
            },
          ],
        },
        {
          label: 'Manufacturers',
          items: [
            {
              to: '/manufacturer/all',
              icon: 'view_list',
              label: 'Manufacturers List',
            },
            {
              to: '/manufactureradd',
              icon: 'add',
              label: 'Add Manufacturer',
            },
          ],
        },
        {
          label: 'Vehicles',
          items: [
            {
              to: '/vehicles/all',
              icon: 'view_list',
              label: 'Vehicle List',
            },
            {
              to: '/vehicles/add',
              icon: 'add',
              label: 'Add Vehicle',
            },
            {
              to: '/vehicles/maintenance',
              icon: 'add',
              label: 'Vehicle Maintenance',
            },

            {
              to: '/vehicles/reports',
              icon: 'description',
              label: 'Reports',
            },
          ],
        },
        {
          label: 'Safety',
          items: [
            {
              to: 'safety/all',
              icon: 'view_list',
              label: 'Job Site Safety',
            },
            {
              to: '/safety/add',
              icon: 'add',
              label: 'Add Safety Report',
            },
            {
              to: '/safety/report',
              icon: 'add',
              label: 'All Safety Reports',
            },
            {
              to: '/safety/toolboxadd',
              icon: 'add',
              label: 'Add Tool Box Talk',
            },
            {
              to: '/safety/toolboxall',
              icon: 'add',
              label: 'All Tool Box Talks',
            },
          ],
        },
        {
          label: 'Tools',
          items: [
            {
              to: '/tools/all',
              icon: 'view_list',
              label: 'Tool List',
            },
            {
              to: '/tools/add',
              icon: 'add',
              label: 'Add Tool',
            },
            {
              to: '/tool/lists',
              icon: 'description',
              label: 'Tool Lists',
            },
          ],
        },
        {
          label: 'Tasks',
          items: [
            {
              to: '/tasks/all',
              icon: 'view_list',
              label: 'Task List',
            },
            {
              to: '/tasks/add',
              icon: 'add',
              label: 'Task List',
            },
            {
              to: '/tasks/categoryadd',
              icon: 'add',
              label: 'Add Task Category',
            },
            {
              to: '/tasks/categorylist',
              icon: 'view_list',
              label: 'Category List',
            },
          ],
        },
        {
          label: 'Cable Manager',
          items: [
            {
              to: '/cable/all',
              icon: 'view_list',
              label: 'All Cables',
            },
            {
              to: '/cable/add',
              icon: 'add',
              label: 'Add Cable',
            },
            {
              to: '/cable/subtract',
              icon: 'south_east',
              label: 'Record Cable Use',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.header-item {
  font-size: 14px;
  font-family: Arial;
}
</style>
