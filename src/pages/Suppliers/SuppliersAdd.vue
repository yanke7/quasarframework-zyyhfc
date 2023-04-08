<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add Supplier</h2>
        </q-card-section>

        <q-card-section>
          <q-form @submit="saveSupplier">
            <q-input v-model="supplier.name" label="Supplier Name" />

            <q-input
              v-model="supplier.contactInfo.phone"
              label="Phone Number"
            />

            <q-input v-model="supplier.contactInfo.email" label="Email" />

            <q-input v-model="supplier.contactInfo.address" label="Address" />

            <q-input v-model="supplier.leadTime" label="Lead Time" />

            <q-input
              v-model="supplier.minOrderQuantity"
              label="Minimum Order Quantity"
            />

            <q-input
              v-model="supplier.orderFrequency"
              label="Order Frequency"
            />

            <q-input
              v-model="supplier.productInfo"
              label="Product Information"
            />

            <q-input v-model="supplier.priceList" label="Price List" />

            <q-input v-model="supplier.paymentTerms" label="Payment Terms" />

            <q-input v-model="supplier.deliveryTerms" label="Delivery Terms" />

            <q-input
              v-model="supplier.contractDetails"
              label="Contract Details"
            />

            <q-btn type="submit" label="Save Supplier" class="q-mt-md" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'SuppliersAdd',

  data() {
    return {
      supplier: {
        name: '',
        contactInfo: {
          phone: '',
          email: '',
          address: '',
        },
        leadTime: '',
        minOrderQuantity: '',
        orderFrequency: '',
        productInfo: '',
        priceList: '',
        paymentTerms: '',
        deliveryTerms: '',
        contractDetails: '',
      },
    };
  },

  methods: {
    submitForm() {
      // submit logic goes here
    },

    saveSupplier() {
      // save supplier logic goes here
    },
  },
};
</script>
