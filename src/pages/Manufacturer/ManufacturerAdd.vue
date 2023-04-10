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

          <div class="q-gutter-sm">
            <q-input
              type="file"
              v-model="image"
              label="Image"
              accept="image/*"
              @change="onImageSelected"
            />
            <div v-if="imageUrl">
              <img :src="imageUrl" style="max-width: 200px" />
            </div>
          </div>
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
      },
      image: null,
      imageUrl: null,
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
        image: this.imageUrl,
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
      this.image = null;
      this.imageUrl = null;
    },
    onImageSelected(event) {
      this.image = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(this.image);
    },
  },
};
</script>
