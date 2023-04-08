<template>
  <div class="q-pa-md">
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2>Customer Information</h2>
          <q-input
            outlined
            v-model="customerName"
            label="Customer Name"
            required
          />
          <q-input outlined v-model="phone" label="Phone Number" />
          <q-input outlined v-model="email" label="Email" type="email" />
          <q-input outlined v-model="address" label="Address" type="textarea" />
          <h2>Purchase History</h2>
          <q-table
            flat
            bordered
            :rows="purchaseHistory"
            :columns="purchaseColumns"
          />
          <h2>Order History</h2>
          <q-table flat bordered :rows="orderHistory" :columns="orderColumns" />
          <h2>Payment Information</h2>
          <q-table
            flat
            bordered
            :rows="paymentHistory"
            :columns="paymentColumns"
          />
          <h2>Preferences</h2>
          <q-input
            outlined
            v-model="preferences"
            label="Preferences"
            type="textarea"
          />
          <h2>Customer Type</h2>
          <q-select
            v-model="customerType"
            label="Customer Type"
            :options="customerTypeOptions"
          />
          <h2>Communication History</h2>
          <q-table
            flat
            bordered
            :rows="communicationHistory"
            :columns="communicationColumns"
          />
          <h2>Feedback</h2>
          <q-input
            outlined
            v-model="feedback"
            label="Feedback"
            type="textarea"
          />
          <h2>Marketing Information</h2>
          <q-table
            flat
            bordered
            :rows="marketingHistory"
            :columns="marketingColumns"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn type="submit" label="Save" color="primary" />
        </q-card-actions>
      </q-card>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CustomerAdd',

  data() {
    return {
      // Customer Information
      customerName: '',
      phone: '',
      email: '',
      address: '',

      // Purchase History
      purchaseHistory: [],
      purchaseColumns: [
        {
          name: 'productName',
          label: 'Product Name',
        },
        {
          name: 'purchaseDate',
          label: 'Purchase Date',
        },
      ],

      // Order History
      orderHistory: [],
      orderColumns: [
        {
          name: 'orderNumber',
          label: 'Order Number',
        },
        {
          name: 'orderDate',
          label: 'Order Date',
        },
        {
          name: 'invoiceNumber',
          label: 'Invoice Number',
        },
      ],

      // Payment Information
      paymentHistory: [],
      paymentColumns: [
        {
          name: 'date',
          label: 'Date',
        },
        {
          name: 'amount',
          label: 'Amount',
        },
        {
          name: 'method',
          label: 'Payment Method',
        },
      ],

      // Preferences
      preferences: '',

      // Customer Type
      customerType: '',
      customerTypeOptions: [
        { label: 'Retail', value: 'Retail' },
        { label: 'Wholesale', value: 'Wholesale' },
      ],

      // Communication History
      communicationHistory: [],
      communicationColumns: [
        {
          name: 'date',
          label: 'Date',
        },
        {
          name: 'type',
          label: 'Type',
        },
        {
          name: 'notes',
          label: 'Notes',
        },
      ],

      // Feedback
      feedback: '',

      // Marketing Information
      marketingHistory: [],
      marketingColumns: [
        {
          name: 'date',
          label: 'Date',
        },
        {
          name: 'type',
          label: 'Type',
        },
        {
          name: 'response',
          label: 'Response',
        },
      ],
    };
  },

  methods: {
    // Submit form
    submitForm() {
      const customer = {
        customerName: this.customerName,
        phone: this.phone,
        email: this.email,
        address: this.address,
        purchaseHistory: this.purchaseHistory,
        orderHistory: this.orderHistory,
        paymentHistory: this.paymentHistory,
        preferences: this.preferences,
        customerType: this.customerType,
        communicationHistory: this.communicationHistory,
        feedback: this.feedback,
        marketingHistory: this.marketingHistory,
      };

      console.log(customer);
      // Submit form data to API or database here
    },
  },
};
</script>
