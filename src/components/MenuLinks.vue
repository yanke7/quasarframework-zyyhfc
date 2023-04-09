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
              to: '/jobsites/add',
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
          ],
        },
        {
          label: 'Supplier',
          items: [
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
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.header-item {
  font-size: 18px;
  font-family: Arial;
}
</style>
