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

          <vue-advanced-cropper
            v-model="croppedImage"
            :src="productImage"
            :options="cropperOptions"
            @cropped="onImageCrop"
            v-if="showCropDialog"
          />

          <q-uploader
            v-model="productImage"
            label="Product Image"
            accept="image/*"
            @added="onImageAdded"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn color="primary" label="Submit" type="submit" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import VueAdvancedCropper from 'vue-advanced-cropper';

export default {
  name: 'InventoryForm',
  components: {
    VueAdvancedCropper,
  },
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
      productImage: null,
      croppedImage: null,
      showCropDialog: false,
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
      cropperOptions: {
        viewMode: 1,
        background: false,
        responsive: true,
        checkCrossOrigin: true,
      },
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
        productImage: this.croppedImage,
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
      this.productImage = null;
      this.croppedImage = null;
      this.showCropDialog = false;
    },
    onImageAdded(file) {
      this.productImage = URL.createObjectURL(file);
      this.showCropDialog = true;
    },
    onImageCrop(data) {
      this.croppedImage = data;
      this.showCropDialog = false;
    },
    onCropCancel() {
      this.showCropDialog = false;
    },
  },
};
</script>
