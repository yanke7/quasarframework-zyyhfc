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

    <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="400">
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
              <q-expansion-item
                label="Customers"
                header-style="font-size: 18px; font-family: Arial;"
              >
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
  </q-layout>

  <q-list>
    <q-item>
      <q-item-section>
        <q-expansion-item
          label="Help Item"
          header-style="font-size: 18px; font-family: Arial;"
        >
          <q-item-label header>Essential Links</q-item-label>

          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-expansion-item>
      </q-item-section>
    </q-item>

    <q-item>
      <q-item-section>
        <q-expansion-item
          label="Customers"
          header-style="font-size: 18px; font-family: Arial;"
        >
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
              <q-item-label caption>Generate a customer report</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          label="Products"
          header-style="font-size: 18px; font-family: Arial;"
        >
          <q-item to="/products/all" clickable>
            <q-item-section avatar>
              <q-icon name="view_list" />
            </q-item-section>
            <q-item-section>
              <q-item-label>All</q-item-label>
              <q-item-label caption>List of all products</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/products/add" clickable>
            <q-item-section avatar>
              <q-icon name="add" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Add</q-item-label>
              <q-item-label caption>Add a new product</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/products/report" clickable>
            <q-item-section avatar>
              <q-icon name="description" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Report</q-item-label>
              <q-item-label caption>Generate a product report</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item
          label="Suppliers"
          header-style="font-size: 18px; font-family: Arial;"
        >
          <q-item to="/suppliers/all" clickable>
            <q-item-section avatar>
              <q-icon name="view_list" />
            </q-item-section>
            <q-item-section>
              <q-item-label>All</q-item-label>
              <q-item-label caption>List of all suppliers</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/suppliers/add" clickable>
            <q-item-section avatar>
              <q-icon name="add" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Add</q-item-label>
              <q-item-label caption>Add a new supplier</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/suppliers/report" clickable>
            <q-item-section avatar>
              <q-icon name="description" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Report</q-item-label>
              <q-item-label caption>Generate a supplier report</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-item-section>
    </q-item>
  </q-list>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

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
