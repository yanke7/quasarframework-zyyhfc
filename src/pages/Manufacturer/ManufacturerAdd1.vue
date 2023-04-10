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
          <q-input
            v-model="manufacturer.techSupportPhone"
            label="Tech Support Phone Number"
          />
          <q-input
            v-model="manufacturer.techSupportEmail"
            label="Tech Support Email"
          />
          <q-input v-model="manufacturer.tags" label="Tags" />
          <input type="file" accept="image/*" @change="onImageAdded" />
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
  name: 'ManufacturerAdd',
  data() {
    return {
      manufacturer: {
        name: '',
        manufacturers: '',
        website: '',
        techSupportPhone: '',
        techSupportEmail: '',
        tags: '',
        image: null,
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
        image: this.manufacturer.image,
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
      this.manufacturer.image = null;
    },
    onImageAdded(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.$refs.imagePreview.src = reader.result;
        this.showCropDialog = true;
      };
    },
    onImageCrop(data) {
      this.manufacturer.image = data;
      this.showCropDialog = false;
    },
  },
};
</script>
