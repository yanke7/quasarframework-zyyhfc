<template>
  <q-page>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="$q.layout.toggle('left')" />

        <q-toolbar-title>Add Supplier</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-section>
      <q-form @submit="saveSupplier">
        <q-input v-model="supplier.name" label="Supplier Name" />

        <q-input v-model="supplier.contactInfo.phone" label="Phone Number" />

        <q-input v-model="supplier.contactInfo.email" label="Email" />

        <q-input v-model="supplier.contactInfo.address" label="Address" />

        <q-input v-model="supplier.leadTime" label="Lead Time" />

        <q-input v-model="supplier.minOrderQuantity" label="Minimum Order Quantity" />

        <q-input v-model="supplier.orderFrequency" label="Order Frequency" />

        <q-input v-model="supplier.productInfo" label="Product Information" />

        <q-input v-model="supplier.priceList" label="Price List" />

        <q-input v-model="supplier.paymentTerms" label="Payment Terms" />

        <q-input v-model="supplier.deliveryTerms" label="Delivery Terms" />

        <q-input v-model="supplier.contractDetails" label="Contract Details" />

        <q-btn type="submit" label="Save Supplier" class="q-mt-md" />
      </q-form>
    </q-page-section>
  </q-page>
</template>

<script>
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
    saveSupplier() {
      // save supplier logic here
    },
  },
};
</script>
