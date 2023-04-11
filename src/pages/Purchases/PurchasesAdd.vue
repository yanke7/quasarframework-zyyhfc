<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add New Purchase</h2>
        </q-card-section>
            <q-card-section>
      <q-input v-model="materialName" label="Material Name" />
      <q-input v-model.number="quantity" label="Quantity" type="number" />
      <q-input v-model.number="unitPrice" label="Unit Price" type="number" />
      <q-input v-model.number="totalPrice" label="Total Price" type="number" disabled />

      <q-input v-model="supplierName" label="Supplier Name" />
      <q-input v-model="supplierContact" label="Supplier Contact" />
      <q-input v-model="purchaseOrderNumber" label="Purchase Order Number" />

      <q-date v-model="deliveryDate" label="Expected Delivery Date" />

      <q-input v-model="shippingMethod" label="Shipping Method" />
      <q-input v-model="carrierName" label="Carrier Name" />
      <q-input v-model="trackingNumber" label="Tracking Number" />

      <q-select v-model="paymentMethod" label="Payment Method" :options="paymentMethodOptions" />
      <q-input v-model="paymentTerms" label="Payment Terms" />

      <q-input v-model="requestorName" label="Requestor Name" />
      <q-input v-model="requestorContact" label="Requestor Contact" />

      <q-checkbox v-model="approvalWorkflow" label="Approval Workflow" />
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
  name: 'PurchasesAdd',
  data() {
    return {
      materialName: '',
      quantity: 0,
      unitPrice: 0,
      supplier: '',
      supplierContact: '',
      purchaseOrderNumber: '',
      deliveryDate: '',
      shippingMethod: '',
      carrierName: '',
      trackingNumber: '',
      paymentMethod: '',
      paymentTerms: '',
      requestorName: '',
      requestorContact: '',
      approvalWorkflow: '',
    };
  },
  computed: {
    totalPrice() {
      return this.quantity * this.unitPrice;
    },
  },
  methods: {
    submitForm() {
      const purchase = {
        materialName: this.materialName,
        quantity: this.quantity,
        unitPrice: this.unitPrice,
        totalPrice: this.totalPrice,
        supplier: this.supplier,
        supplierContact: this.supplierContact,
        purchaseOrderNumber: this.purchaseOrderNumber,
        deliveryDate: this.deliveryDate,
        shippingMethod: this.shippingMethod,
        carrierName: this.carrierName,
        trackingNumber: this.trackingNumber,
        paymentMethod: this.paymentMethod,
        paymentTerms: this.paymentTerms,
        requestorName: this.requestorName,
        requestorContact: this.requestorContact,
        approvalWorkflow: this.approvalWorkflow,
      };

      // submit purchase to server
      console.log(purchase);

      // clear form
      this.materialName = '';
      this.quantity = 0;
      this.unitPrice = 0;
      this.supplier = '';
      this.supplierContact = '';
      this.purchaseOrderNumber = '';
      this.deliveryDate = '';
      this.shippingMethod = '';
      this.carrierName = '';
      this.trackingNumber = '';
      this.paymentMethod = '';
      this.paymentTerms = '';
      this.requestorName = '';
      this.requestorContact = '';
      this.approvalWorkflow = '';
    },
  },
};
</script>
