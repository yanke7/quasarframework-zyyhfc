<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add Tool</h2>
        </q-card-section>
        <q-card-section>
          <q-input v-model="toolName" label="Tool Name" />
          <q-input v-model="description" label="Description" type="textarea" />
          <q-input v-model="sku" label="SKU/Serial Number" />
          <q-input v-model="location" label="Location" />
          <q-select
            v-model="availability"
            label="Availability"
            :options="availabilityOptions"
          />
          <q-input v-model="pdfmanual" label="PDF Manual" />
          <q-input v-model="condition" label="Condition" />
          <q-input v-model="maintenanceSchedule" label="Maintenance Schedule" />
          <q-input v-model="rentalHistory" label="Rental History" />
          <q-input v-model="calibrationSchedule" label="Calibration Schedule" />
          <q-input v-model="warrantyPeriod" label="Warranty Period" />
          <q-input v-model="warrantyProvider" label="Warranty Provider" />
          <q-uploader
            v-model="toolImage"
            label="Tool Image"
            accept="image/*"
            @added="onImageAdded"
          />
          <q-crop
            v-model="croppedImage"
            :canvas-size="{ width: 200, height: 200 }"
            :image-src="toolImage"
            @crop="onImageCrop"
            v-if="showCropDialog"
          />
          <q-input v-model="notes" label="Notes" type="textarea" />
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
  name: 'ToolsAdd',
  data() {
    return {
      toolName: '',
      description: '',
      sku: '',
      location: '',
      availability: '',
      pdfmanual: '',
      condition: '',
      maintenanceSchedule: '',
      rentalHistory: '',
      calibration: '',
      warranty: {
        period: '',
        provider: '',
        coverageDetails: '',
      },
      checkInOut: '',
      notes: '',
      toolImage: null,
      croppedImage: null,
      showCropDialog: false,
    };
  },
  methods: {
    submitForm() {
      const tool = {
        toolName: this.toolName,
        description: this.description,
        sku: this.sku,
        location: this.location,
        availability: this.availability,
        pdfmanual: this.pdfmanual,
        condition: this.condition,
        maintenanceSchedule: this.maintenanceSchedule,
        rentalHistory: this.rentalHistory,
        calibration: this.calibration,
        warranty: this.warranty,
        checkInOut: this.checkInOut,
        notes: this.notes,
        toolImage: this.croppedImage,
      };

      // submit tool to server
      console.log(tool);

      // clear form
      this.toolName = '';
      this.description = '';
      this.sku = '';
      this.location = '';
      this.availability = '';
      this.pdfmanual = '';
      this.condition = '';
      this.maintenanceSchedule = '';
      this.rentalHistory = '';
      this.calibration = '';
      this.warranty = {
        period: '',
        provider: '',
        coverageDetails: '',
      };
      this.checkInOut = '';
      this.notes = '';
      this.toolImage = null;
      this.croppedImage = null;
      this.showCropDialog = false;
    },
    onImageAdded(file) {
      this.toolImage = URL.createObjectURL(file);
      this.showCropDialog = true;
    },
    onImageCrop(img) {
      this.croppedImage = img;
      this.showCropDialog = false;
    },
  },
};
</script>
