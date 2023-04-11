<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add New Task</h2>
        </q-card-section>
        <q-card-section>
          <q-input v-model="taskName" label="Task Name" />
          <q-input v-model="location" label="Location" />
          <q-input v-model="description" label="Description" type="textarea" />
          <q-input v-model="estimatedTime" label="Estimated Time" />
          <q-input
            v-model="assignedTeamMembers"
            label="Assigned Team Members"
          />
          <q-input v-model="materialsRequired" label="Materials Required" />
          <q-checkbox v-model="progressTracking" label="Progress Tracking" />
          <q-input v-model="notes" label="Notes" type="textarea" />
          <q-input v-model="dueDate" label="Due Date" type="date" />
          <q-checkbox
            v-model="alertsAndNotifications"
            label="Alerts and Notifications"
          />
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
  name: 'TaskAdd',
  data() {
    return {
      taskName: '',
      location: '',
      description: '',
      estimatedTime: '',
      assignedTeamMembers: '',
      materialsRequired: '',
      progressTracking: false,
      notes: '',
      dueDate: '',
      alertsAndNotifications: false,
    };
  },
  methods: {
    submitForm() {
      const task = {
        taskName: this.taskName,
        location: this.location,
        description: this.description,
        estimatedTime: this.estimatedTime,
        assignedTeamMembers: this.assignedTeamMembers,
        materialsRequired: this.materialsRequired,
        progressTracking: this.progressTracking,
        notes: this.notes,
        dueDate: this.dueDate,
        alertsAndNotifications: this.alertsAndNotifications,
      };

      // submit task to server
      console.log(task);

      // clear form
      this.taskName = '';
      this.location = '';
      this.description = '';
      this.estimatedTime = '';
      this.assignedTeamMembers = '';
      this.materialsRequired = '';
      this.progressTracking = false;
      this.notes = '';
      this.dueDate = '';
      this.alertsAndNotifications = false;
    },
  },
};
</script>
