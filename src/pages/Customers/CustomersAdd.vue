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
    <div><br /><br /><br /></div>
    <router-link to="/" class="q-mt-md">
      <q-btn color="primary" label="Home" />
    </router-link>

    <router-link to="/products/add" class="q-mt-md">
      <q-btn color="primary" label="Customers" />
    </router-link>
    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-input
          standout="bg-teal text-white"
          v-model="text"
          label="Custom standout"
        />
        <q-input
          standout="bg-teal text-white"
          v-model="text"
          label="Custom standout"
        />

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
  name: 'CustomersAdd',

  setup() {
    const text = ref('');

    return {
      text,
    };
  },
};
</script>
