<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add New Vehicle</h2>
        </q-card-section>

        <q-card-section>
          <q-input v-model="make" label="Vehicle Make" />
          <q-input v-model="model" label="Vehicle Model" />
          <q-input v-model="year" label="Vehicle Year" type="number" />
          <q-input v-model="vin" label="Vehicle VIN" />
          <q-input v-model="licensePlate" label="License Plate" />
          <q-select
            v-model="vehicleType"
            label="Vehicle Type"
            :options="vehicleTypeOptions"
          />
          <q-input v-model="mpg" label="Fuel Efficiency (MPG)" type="number" />
          <q-input v-model="maintenanceSchedule" label="Maintenance Schedule" />
          <q-input v-model="policyNumber" label="Insurance Policy Number" />
          <q-input v-model="insuranceProvider" label="Insurance Provider" />
          <q-input v-model="coverageLimits" label="Insurance Coverage Limits" />
          <q-input v-model="driverName" label="Driver Name" />
          <q-input v-model="driverLicense" label="Driver License Number" />
          <q-input
            v-model="driverExpiration"
            label="Driver License Expiration"
          />
          <q-input
            v-model="startingMileage"
            label="Starting Mileage"
            type="number"
          />
          <q-input
            v-model="endingMileage"
            label="Ending Mileage"
            type="number"
          />
          <q-input
            v-model="totalMilesDriven"
            label="Total Miles Driven"
            type="number"
          />
          <q-checkbox v-model="gpsTracking" label="GPS Tracking" />
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
  name: 'VehiclesAdd',
  data() {
    return {
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      vehicleVIN: '',
      licensePlate: '',
      vehicleType: '',
      fuelEfficiency: {
        city: '',
        highway: '',
      },
      maintenanceSchedule: '',
      insurance: {
        policyNumber: '',
        provider: '',
        coverageLimits: '',
      },
      driver: {
        name: '',
        licenseNumber: '',
        expirationDate: '',
      },
      mileage: {
        startingMileage: '',
        endingMileage: '',
        totalMilesDriven: '',
      },
      gpsTracking: false,
      notes: '',
    };
  },
  methods: {
    submitForm() {
      const vehicle = {
        make: this.vehicleMake,
        model: this.vehicleModel,
        year: this.vehicleYear,
        vin: this.vehicleVIN,
        licensePlate: this.licensePlate,
        type: this.vehicleType,
        fuelEfficiency: this.fuelEfficiency,
        maintenanceSchedule: this.maintenanceSchedule,
        insurance: this.insurance,
        driver: this.driver,
        mileage: this.mileage,
        gpsTracking: this.gpsTracking,
        notes: this.notes,
      };

      // submit vehicle to server
      console.log(vehicle);

      // clear form
      this.vehicleMake = '';
      this.vehicleModel = '';
      this.vehicleYear = '';
      this.vehicleVIN = '';
      this.licensePlate = '';
      this.vehicleType = '';
      this.fuelEfficiency = {
        city: '',
        highway: '',
      };
      this.maintenanceSchedule = '';
      this.insurance = {
        policyNumber: '',
        provider: '',
        coverageLimits: '',
      };
      this.driver = {
        name: '',
        licenseNumber: '',
        expirationDate: '',
      };
      this.mileage = {
        startingMileage: '',
        endingMileage: '',
        totalMilesDriven: '',
      };
      this.gpsTracking = false;
      this.notes = '';
    },
  },
};
</script>
