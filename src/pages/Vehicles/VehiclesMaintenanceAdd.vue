<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add Vehicle Maintenance</h2>
        </q-card-section>

        <q-card-section>
          <q-input v-model="date" label="Date" type="date" />
          <q-input v-model="type" label="Type" />
          <q-input v-model="amount" label="Amount" type="number" />
          <q-input v-model="location" label="Location" />
          <q-input v-model="taxes" label="Taxes GST / PST" />
          <q-toggle
            v-model="reimbursementNeeded"
            label="Reimbursement Needed?"
          />
          <q-select
            v-model="category"
            label="Category"
            :options="categoryOptions"
          />
          <q-input v-model="tag" label="Tag" />
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
  name: 'VehicleMaintenanceAdd',
  data() {
    return {
      date: '',
      type: '',
      amount: '',
      location: '',
      taxes: '',
      reimbursementNeeded: false,
      category: '',
      tag: '',
      notes: '',
      categoryOptions: [
        {
          label: 'Oil Change',
          value: 'oil-change',
        },
        {
          label: 'Tire Rotation',
          value: 'tire-rotation',
        },
        {
          label: 'Brake Service',
          value: 'brake-service',
        },
        {
          label: 'Battery Replacement',
          value: 'battery-replacement',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    };
  },
  methods: {
    submitForm() {
      const maintenance = {
        date: this.date,
        type: this.type,
        amount: this.amount,
        location: this.location,
        taxes: this.taxes,
        reimbursementNeeded: this.reimbursementNeeded,
        category: this.category,
        tag: this.tag,
        notes: this.notes,
      };

      // submit maintenance to server
      console.log(maintenance);

      // clear form
      this.date = '';
      this.type = '';
      this.amount = '';
      this.location = '';
      this.taxes = '';
      this.reimbursementNeeded = false;
      this.category = '';
      this.tag = '';
      this.notes = '';
    },
  },
};
</script>
