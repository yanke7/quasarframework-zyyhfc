<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add New Cable</h2>
        </q-card-section>

        <q-card-section>
          <q-input v-model="cableType" label="Cable Type" />
          <q-input v-model="cableLength" label="Cable Length" />
          <q-input v-model="cableDiameter" label="Cable Diameter" />
          <q-input v-model="boxReelQuantity" label="Box/Reel Quantity" />
          <q-input v-model="location" label="Location" />
          <q-input v-model="usage" label="Usage Information" />
          <q-input v-model="purchaseOrderNumber" label="Purchase Order Number" />
          <q-input v-model="supplier" label="Supplier" />
          <q-date v-model="purchaseDate" label="Purchase Date" />
          <q-input v-model="cost" label="Cost per Box/Reel" />
          <q-input v-model="warrantyPeriod" label="Warranty Period" />
          <q-input v-model="warrantyProvider" label="Warranty Provider" />
          <q-input v-model="coverageDetails" label="Warranty Coverage Details" />
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
  name: 'CableAdd',
  data() {
    return {
      cableType: '',
      cableLength: '',
      cableDiameter: '',
      boxReelQuantity: '',
      location: '',
      usage: '',
      purchaseOrderNumber: '',
      supplier: '',
      purchaseDate: '',
      cost: '',
      warrantyPeriod: '',
      warrantyProvider: '',
      coverageDetails: '',
      notes: '',
    };
  },
  methods: {
    submitForm() {
      const cable = {
        cableType: this.cableType,
        cableLength: this.cableLength,
        cableDiameter: this.cableDiameter,
        boxReelQuantity: this.boxReelQuantity,
        location: this.location,
        usage: this.usage,
        purchaseOrderNumber: this.purchaseOrderNumber,
        supplier: this.supplier,
        purchaseDate: this.purchaseDate,
        cost: this.cost,
        warranty: {
          period: this.warrantyPeriod,
          provider: this.warrantyProvider,
          coverageDetails: this.coverageDetails,
        },
        notes: this.notes,
      };

      // submit cable to server
      console.log(cable);

      // clear form
      this.cableType = '';
      this.cableLength = '';
      this.cableDiameter = '';
      this.boxReelQuantity = '';
      this.location = '';
      this.usage = '';
      this.purchaseOrderNumber = '';
      this.supplier = '';
      this.purchaseDate = '';
      this.cost = '';
      this.warrantyPeriod = '';
      this.warrantyProvider = '';
      this.coverageDetails = '';
      this.notes = '';
    },
  },
};
</script>
