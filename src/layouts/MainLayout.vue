<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="no-wrap">
        <div class="col row">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title>Low Voltage Canada</q-toolbar-title>
        </div>

        <div class="col row justify-end">Cable Manager v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="400"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item>
            <q-item-section>
              <q-expansion-item label="Customers" class="header-item">
                <q-item to="/customers/all" clickable>
                  <q-item-section avatar>
                    <q-icon name="view_list" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>All</q-item-label>
                    <q-item-label caption>List of all customers</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/customers/add" clickable>
                  <q-item-section avatar>
                    <q-icon name="add" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Add</q-item-label>
                    <q-item-label caption>Add a new customer</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/customers/reports" clickable>
                  <q-item-section avatar>
                    <q-icon name="description" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Report</q-item-label>
                    <q-item-label caption
                      >Generate a customer report</q-item-label
                    >
                  </q-item-section>
                </q-item>
              </q-expansion-item>
            </q-item-section>
          </q-item>
          <!-- Add Products and Suppliers sections here -->
          <q-item>
            <q-item-section>
              <q-expansion-item label="Products" class="header-item">
                <!-- Products menu items -->
              </q-expansion-item>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-expansion-item label="Suppliers" class="header-item">
                <!-- Suppliers menu items -->
              </q-expansion-item>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/logo-v2/social-cover.jpg"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png?w=360"
            />
          </q-avatar>
          <div class="text-weight-bold">Your Name</div>
          <div>Your Title</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<!-- Style Specific to the MainLayout -->
<style>
.header-item {
  font-size: 18px;
  font-family: Arial;
}
</style>
<!-- script section here -->

<script>
import { defineComponent, ref } from 'vue';

const linksList = [
  // Your linksList data
];

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
