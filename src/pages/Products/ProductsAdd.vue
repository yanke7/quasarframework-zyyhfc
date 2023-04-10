<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add Product</h2>
        </q-card-section>

        <q-card-section>
          <q-input v-model="productType" label="Product Type" />
          <q-input v-model="brand" label="Brand" />
          <q-input v-model="productLine" label="Product Line" />
          <q-select
            v-model="pricing"
            label="Pricing"
            :options="pricingOptions"
          />
          <q-select v-model="usage" label="Usage" :options="usageOptions" />
          <q-select
            v-model="availability"
            label="Availability"
            :options="availabilityOptions"
          />
          <q-input v-model="supplier" label="Supplier" />
          <q-input v-model="location" label="Location" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn color="primary" label="Submit" type="submit" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'InventoryForm',
  data() {
    return {
      productType: '',
      brand: '',
      productLine: '',
      pricing: '',
      usage: '',
      availability: '',
      supplier: '',
      location: '',
      pricingOptions: [
        {
          label: 'Low',
          value: 'low',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'High',
          value: 'high',
        },
      ],
      usageOptions: [
        {
          label: 'Personal',
          value: 'personal',
        },
        {
          label: 'Commercial',
          value: 'commercial',
        },
      ],
      availabilityOptions: [
        {
          label: 'In-stock',
          value: 'inStock',
        },
        {
          label: 'Back-ordered',
          value: 'backOrdered',
        },
      ],
    };
  },
  methods: {
    submitForm() {
      const inventory = {
        productType: this.productType,
        brand: this.brand,
        productLine: this.productLine,
        pricing: this.pricing,
        usage: this.usage,
        availability: this.availability,
        supplier: this.supplier,
        location: this.location,
      };

      // submit inventory to server
      console.log(inventory);

      // clear form
      this.productType = '';
      this.brand = '';
      this.productLine = '';
      this.pricing = '';
      this.usage = '';
      this.availability = '';
      this.supplier = '';
      this.location = '';
    },
  },
};
</script>
