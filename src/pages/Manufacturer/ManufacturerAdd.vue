<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add New Manufacturer</h2>
        </q-card-section>

        <q-card-section>
          <q-input v-model="name" label="Name" />
          <q-input v-model="website" label="Website" />
          <q-input
            v-model="techSupportPhone"
            label="Tech Support Phone Number"
          />
          <q-input v-model="techSupportEmail" label="Tech Support Email" />
          <q-input v-model="tags" label="Tags" />
          <q-space />
          <q-space />
          <q-uploader
            v-model="manufacturerImage"
            label="Manufacturer Image"
            accept="image/*"
            @added="onImageAdded"
          />
          <q-crop
            v-model="croppedImage"
            :canvas-size="{ width: 200, height: 200 }"
            :image-src="manufacturerImage"
            @crop="onImageCrop"
            v-if="showCropDialog"
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
import { ref } from 'vue';

export default {
  name: 'ManufacturerAdd',
  data() {
    return {
      name: '',
      website: '',
      techSupportPhone: '',
      techSupportEmail: '',
      tags: '',
      manufacturerImage: null,
      croppedImage: null,
      showCropDialog: false,
    };
  },
  methods: {
    submitForm() {
      const manufacturer = {
        name: this.name,
        website: this.website,
        techSupportPhone: this.techSupportPhone,
        techSupportEmail: this.techSupportEmail,
        tags: this.tags,
        manufacturerImage: this.croppedImage,
      };

      // submit manufacturer to server
      console.log(manufacturer);

      // clear form
      this.name = '';
      this.website = '';
      this.techSupportPhone = '';
      this.techSupportEmail = '';
      this.tags = '';
      this.manufacturerImage = null;
      this.croppedImage = null;
      this.showCropDialog = false;
    },
    onImageAdded(file) {
      this.manufacturerImage = URL.createObjectURL(file);
      this.showCropDialog = true;
    },
    cropHandler(img) {
      this.croppedImage = img;
      this.showCropDialog = false;
    },
  },
};
</script>
