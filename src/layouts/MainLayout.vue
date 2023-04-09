<template>
  <q-layout view="hHr lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Low Voltage Canada
        </q-toolbar-title>
        <q-btn dense flat round icon="more_vert" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      :width="250"
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
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
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-list>
        <q-item>
          <q-item-section>
            <menu-links-component></menu-links-component>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Low Voltage Canada</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

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
    const rightDrawerOpen = ref(false);

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
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      toggleFullScreen,
    };
  },
});
</script>

<style>
.header-item {
  font-size: 14px;
  font-family: Arial;
}
</style>
