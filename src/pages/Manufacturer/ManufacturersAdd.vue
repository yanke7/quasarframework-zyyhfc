<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add Manufacturer</h2>
        </q-card-section>

        <q-card-section>
          <q-input v-model="manufacturer.name" label="Name" />
          <q-input v-model="manufacturer.manufacturers" label="Manufacturers" />
          <q-input v-model="manufacturer.website" label="Website" />
          <q-input v-model="manufacturer.techSupportPhone" label="Tech Support Phone Number" />
          <q-input v-model="manufacturer.techSupportEmail" label="Tech Support Email" />
          <q-input v-model="manufacturer.tags" label="Tags" />
          <vue-advanced-cropper
            v-model="croppedImage"
            :src="manufacturerImage"
            :options="cropperOptions"
            @cropped="onImageCrop"
            v-if="showCropDialog"
          />

          <q-uploader
            v-model="manufacturerImage"
            label="Manufacturer Image"
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
  name: 'ManufacturersAdd',
  components: {
    VueAdvancedCropper,
  },
  data() {
    return {
      manufacturer: {
        name: '',
        manufacturers: '',
        website: '',
        techSupportPhone: '',
        techSupportEmail: '',
        tags: '',
        manufacturerImage: null,
        croppedImage: null,
        showCropDialog: false,
      },
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
      const manufacturer = {
        name: this.manufacturer.name,
        manufacturers: this.manufacturer.manufacturers,
        website: this.manufacturer.website,
        techSupportPhone: this.manufacturer.techSupportPhone,
        techSupportEmail: this.manufacturer.techSupportEmail,
        tags: this.manufacturer.tags,
        manufacturerImage: this.croppedImage,
      };

      // submit manufacturer to server
      console.log(manufacturer);

      // clear form
      this.manufacturer.name = '';
      this.manufacturer.manufacturers = '';
      this.manufacturer.website = '';
      this.manufacturer.techSupportPhone = '';
      this.manufacturer.techSupportEmail = '';
      this.manufacturer.tags = '';
      this.manufacturerImage = null;
      this.croppedImage = null;
      this.showCropDialog = false;
    },
    onImageAdded(file) {
      this.manufacturerImage = URL.createObjectURL(file);
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
