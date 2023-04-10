<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add Warehouse</h2>
        </q-card-section>

        <q-card-section>
          <q-form @submit="saveWarehouse">
            <q-input v-model="warehouse.name" label="Warehouse Name" />

            <q-input v-model="warehouse.address" label="Address" />

            <q-input
              v-model="warehouse.contactInfo.phone"
              label="Phone Number"
            />

            <q-input v-model="warehouse.contactInfo.email" label="Email" />

            <q-input v-model="warehouse.contactInfo.contactName" label="Contact Name" />

            <q-input v-model="warehouse.tags" label="Tags" />

            <q-btn type="submit" label="Save Warehouse" class="q-mt-md" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'WarehouseAdd',

  data() {
    return {
      warehouse: {
        name: '',
        address: '',
        contactInfo: {
          phone: '',
          email: '',
          contactName: '',
        },
        tags: '',
      },
    };
  },

  methods: {
    submitForm() {
      // submit logic goes here
    },

    saveWarehouse() {
      // save warehouse logic goes here
    },
  },
};
</script>
