<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add New Tool</h2>
        </q-card-section>
            <q-card-section>
      <q-input v-model="toolName" label="Tool Name" />
      <q-input v-model="description" label="Description" type="textarea" />
      <q-input v-model="sku" label="SKU or Serial Number" />
      <q-input v-model="location" label="Location" />
      <q-select
        v-model="availability"
        label="Availability"
        :options="availabilityOptions"
      />
      <q-input v-model="condition" label="Condition" />
      <q-input v-model="maintenanceSchedule" label="Maintenance Schedule" />
      <q-input v-model="rentalHistory" label="Rental History" type="textarea" />
      <q-input v-model="calibration" label="Calibration" />
      <q-input v-model="warrantyPeriod" label="Warranty Period" type="number" />
      <q-input v-model="warrantyProvider" label="Warranty Provider" />
      <q-input v-model="coverageDetails" label="Warranty Coverage Details" />
      <q-checkbox v-model="checkInOut" label="Check In/Out" />
      <q-input v-model="notes" label="Notes" type="textarea" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" label="Submit" type="submit" />
    </q-card-actions>
  </q-card>
</q-form>
</q-page>
</template>
And here is the code for the script section of ToolsAdd.vue:

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
      condition: '',
      maintenanceSchedule: '',
      rentalHistory: '',
      calibration: '',
      warrantyPeriod: '',
      warrantyProvider: '',
      coverageDetails: '',
      checkInOut: false,
      notes: '',
      availabilityOptions: ['Available', 'In Use'],
    };
  },
  methods: {
    submitForm() {
      const tool = {
        name: this.toolName,
        description: this.description,
        sku: this.sku,
        location: this.location,
        availability: this.availability,
        condition: this.condition,
        maintenanceSchedule: this.maintenanceSchedule,
        rentalHistory: this.rentalHistory,
        calibration: this.calibration,
        warranty: {
          period: this.warrantyPeriod,
          provider: this.warrantyProvider,
          coverageDetails: this.coverageDetails,
        },
        checkInOut: this.checkInOut,
        notes: this.notes,
      };

      // submit tool to server
      console.log(tool);

      // clear form
      this.toolName = '';
      this.description = '';
      this.sku = '';
      this.location = '';
      this.availability = '';
      this.condition = '';
      this.maintenanceSchedule = '';
      this.rentalHistory = '';
      this.calibration = '';
      this.warrantyPeriod = '';
      this.warrantyProvider = '';
      this.coverageDetails = '';
      this.checkInOut = false;
      this.notes = '';
    },
  },
};
</script>