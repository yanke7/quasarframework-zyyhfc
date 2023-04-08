<template>
  <q-page class="column flex-center">
    <q-knob
      v-model="count"
      :min="min"
      :max="max"
      size="80px"
      show-value
      :thickness="0.13"
      color="primary"
      track-color="dark"
    >
      <q-avatar size="75px">
        <img alt="Quasar logo" src="~assets/quasar-logo-inner.svg" />
      </q-avatar>
    </q-knob>

    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 140px"
    />

    <router-link to="/customers/add" class="q-mt-md">
      <q-btn color="primary" label="Customers" />
    </router-link>

      <router-link to="/products/add" class="q-mt-md">
      <q-btn color="primary" label="Customers" />
    </router-link>

    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-input v-model="text" label="Standard" />

        <q-input filled v-model="text" label="Filled" />

        <q-input outlined v-model="text" label="Outlined" />

        <q-input standout v-model="text" label="Standout" />

        <q-input
          standout="bg-teal text-white"
          v-model="text"
          label="Custom standout"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'IndexPage',

  setup() {
    const text = ref('');

    return {
      text,
    };
  },
};
</script>
