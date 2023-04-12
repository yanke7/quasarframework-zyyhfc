<template>
  <q-page>
    <div class="q-pa-md">
      <h2 class="text-h4">All Purchases</h2>
      <q-table
        :data="purchases"
        :columns="columns"
        row-key="id"
        v-model:pagination="pagination"
        v-model:expanded="expanded"
        :visible-columns="visibleColumns"
      >
        <template v-slot:body-row="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <div v-if="col.name === 'details'" class="q-pa-xs">
                <q-card>
                  <q-card-section>
                    <div>
                      <strong>Supplier:</strong>
                      <p>Name: {{ props.row.supplierName }}</p>
                      <p>Contact: {{ props.row.supplierContact }}</p>
                    </div>
                    <div>
                      <strong>Shipping Details:</strong>
                      <p>Method: {{ props.row.shippingMethod }}</p>
                      <p>Carrier Name: {{ props.row.carrierName }}</p>
                      <p>Tracking Number: {{ props.row.trackingNumber }}</p>
                    </div>
                    <div>
                      <strong>Payment:</strong>
                      <p>Method: {{ props.row.paymentMethod }}</p>
                      <p>Terms: {{ props.row.paymentTerms }}</p>
                    </div>
                    <div>
                      <strong>Requestor:</strong>
                      <p>Name: {{ props.row.requestorName }}</p>
                      <p>Contact: {{ props.row.requestorContact }}</p>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <template v-else>
                {{ col.value }}
              </template>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PurchasesAll',

  data() {
    return {
      columns: [
        {
          name: 'materialName',
          label: 'Material Name',
          field: 'materialName',
          align: 'left',
        },
        {
          name: 'quantity',
          label: 'Quantity',
          field: 'quantity',
          align: 'left',
        },
        {
          name: 'unitPrice',
          label: 'Unit Price',
          field: 'unitPrice',
          align: 'left',
        },
        {
          name: 'totalPrice',
          label: 'Total Price',
          field: 'totalPrice',
          align: 'left',
        },
        { name: 'details', label: 'Details', align: 'left', sortable: false },
      ],
      visibleColumns: [
        'materialName',
        'quantity',
        'unitPrice',
        'totalPrice',
        'details',
      ],
      pagination: {
        rowsPerPage: 0,
      },
      expanded: [],
      purchases: [
        // Add your purchases data here
      ],
    };
  },
};
</script>
