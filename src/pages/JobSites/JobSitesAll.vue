<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="Job Sites"
      :rows="tableData"
      :columns="columns"
      row-key="jobSiteName"
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

          <q-td>{{ props.row.jobSiteName }}</q-td>
          <q-td>{{ props.row.address }}</q-td>
          <q-td>{{ props.row.phoneNumber }}</q-td>
          <q-td>{{ props.row.email }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';

const columns = [
  {
    name: 'jobSiteName',
    required: true,
    label: 'Job Site Name',
    align: 'left',
    field: 'jobSiteName',
    format: (val) => `${val}`,
    sortable: true,
    editable: true,
  },
  {
    name: 'address',
    label: 'Address',
    align: 'left',
    field: 'address',
    sortable: true,
    editable: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    align: 'left',
    field: 'phone',
    sortable: true,
    editable: true,
  },
  {
    name: 'email',
    label: 'Email',
    align: 'left',
    field: 'email',
    sortable: true,
    editable: true,
  },
  {
    name: 'managerName',
    label: 'Job Site Manager',
    align: 'left',
    field: 'managerName',
    sortable: true,
    editable: true,
  },
  {
    name: 'hoursOfOperation',
    label: 'Hours of Operation',
    align: 'left',
    field: 'hoursOfOperation',
    sortable: true,
    editable: true,
  },
];

const rows = [
  {
    jobSiteName: 'Job Site 1',
    address: '123 Main St',
    phone: '555-1234',
    email: 'jobsite1@example.com',
    managerName: 'John Doe',
    hoursOfOperation: '8am - 5pm',
  },
  {
    jobSiteName: 'Job Site 2',
    address: '456 Elm St',
    phone: '555-5678',
    email: 'jobsite2@example.com',
    managerName: 'Jane Smith',
    hoursOfOperation: '7am - 4pm',
  },
  {
    jobSiteName: 'Job Site 3',
    address: '789 Oak St',
    phone: '555-9012',
    email: 'jobsite3@example.com',
    managerName: 'Bob Johnson',
    hoursOfOperation: '9am - 6pm',
  },
];

export default {
  name: 'JobSitesAll',
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
