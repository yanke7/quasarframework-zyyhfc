<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Suppliers"
      :rows="tableData"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm"
              color="accent"
              round
              dense
              @click="toggleExpand(props.row)"
              :icon="props.row.expand ? 'remove' : 'add'"
            />
          </q-td>

          <q-td>{{ props.row.name }}</q-td>
          <q-td>{{ props.row.contactInfo.phone }}</q-td>
          <q-td>{{ props.row.contactInfo.email }}</q-td>
        </q-tr>

        <q-tr v-show="props.row.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              <h3 style="font-size: 16px; font-weight: bold">
                Supplier Information
              </h3>

              <p>Address: {{ props.row.contactInfo.address }}</p>

              <p>Lead Time: {{ props.row.leadTime }}</p>
              <p>Minimum Order Quantity: {{ props.row.minOrderQuantity }}</p>
              <p>Order Frequency: {{ props.row.orderFrequency }}</p>
              <p>
                Product Information:
                <q-popup-edit v-model="props.row.productInfo" v-slot="scope">
                  <q-input
                    type="textarea"
                    v-model="scope.value"
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </p>
              <p>
                Price List:
                <q-popup-edit v-model="props.row.priceList" v-slot="scope">
                  <q-input
                    type="textarea"
                    v-model="scope.value"
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </p>
              <p>
                Payment Terms:
                <q-popup-edit v-model="props.row.paymentTerms" v-slot="scope">
                  <q-input
                    type="textarea"
                    v-model="scope.value"
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </p>
              <p>
                Delivery Terms:
                <q-popup-edit v-model="props.row.deliveryTerms" v-slot="scope">
                  <q-input
                    type="textarea"
                    v-model="scope.value"
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </p>
              <p>
                Contract Details:
                <q-popup-edit
                  v-model="props.row.contractDetails"
                  v-slot="scope"
                >
                  <q-input
                    type="textarea"
                    v-model="scope.value"
                    dense
                    autofocus
                  />
                </q-popup-edit>
              </p>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Supplier Name',
    align: 'center',
    field: 'name',
    format: (val) => `${val}`,
    sortable: true,
    editable: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    align: 'center',
    field: 'contactInfo.phone',
    sortable: true,
    editable: true,
  },
  {
    name: 'email',
    label: 'Email',
    align: 'center',
    field: 'contactInfo.email',
    sortable: true,
    editable: true,
  },
];

const rows = [
  {
    name: 'Supplier 1',
    contactInfo: {
      phone: '555-1234',
      email: 'supplier1@example.com',
      address: '123 Main St',
    },
    leadTime: '1 week',
    minOrderQuantity: 10,
    orderFrequency: 'Monthly',
    productInfo: 'Product information 1',
    priceList: 'Price list 1',
    paymentTerms: 'Payment terms 1',
    deliveryTerms: 'Delivery terms 1',
    contractDetails: 'Contract details 1',
    expand: false,
  },
  {
    name: 'Supplier 2',
    contactInfo: {
      phone: '555-5678',
      email: 'supplier2@example.com',
      address: '456 Elm St',
    },
    leadTime: '2 weeks',
    minOrderQuantity: 25,
    orderFrequency: 'Quarterly',
    productInfo: 'Product information 2',
    priceList: 'Price list 2',
    paymentTerms: 'Payment terms 2',
    deliveryTerms: 'Delivery terms 2',
    contractDetails: 'Contract details 2',
    expand: false,
  },
  {
    name: 'Supplier 3',
    contactInfo: {
      phone: '555-9012',
      email: 'supplier3@example.com',
      address: '789 Oak St',
    },
    leadTime: '2 weeks',
    minOrderQuantity: 25,
    orderFrequency: 'Quarterly',
    productInfo: 'Product information 2',
    priceList: 'Price list 2',
    paymentTerms: 'Payment terms 2',
    deliveryTerms: 'Delivery terms 2',
    contractDetails: 'Contract details 2',
    expand: false,
  },
];

export default {
  setup() {
    const tableData = ref(rows);

    function toggleExpand(row) {
      row.expand = !row.expand;
    }

    return {
      columns,
      tableData,
      toggleExpand,
    };
  },
};
</script>
