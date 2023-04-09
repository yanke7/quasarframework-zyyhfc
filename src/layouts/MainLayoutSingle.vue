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

        <div class="col row justify-end">
          <q-btn @click="toggleFullScreen">
            {{ isFullScreen ? 'Exit Full Screen' : 'X' }}
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
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
          <!-- Menu Link are in components -->
          <menu-links-component></menu-links-component>
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
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            />
          </q-avatar>
          <div class="text-weight-bold">Batman</div>
          <div>Master Crime Fighter</div>
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
  font-size: 14px;
  font-family: Arial;
}
</style>
<!-- script section here -->

<script>
import { defineComponent, ref } from 'vue';
import MenuLinksComponent from '../components/MenuLinks.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    MenuLinksComponent,
  },
  setup() {
    const leftDrawerOpen = ref(false);

    const toggleFullScreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleFullScreen,
    };
  },
});
</script>
