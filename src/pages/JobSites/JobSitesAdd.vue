<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add New Job Site</h2>
        </q-card-section>

        <q-card-section>
          <q-input v-model="jobSiteName" label="Job Site Name" />
          <q-input v-model="address" label="Address" />
          <q-input v-model="phoneNumber" label="Phone Number" />
          <q-input v-model="email" label="Email Address" />
          <q-input v-model="jobSiteManager" label="Job Site Manager" />
          <q-input v-model="hoursOfOperation" label="Hours of Operation" />
          <q-input v-model="specialInstructions" label="Special Instructions" />
          <q-select
            v-model="projectManagement"
            label="Project Management"
            :options="projectManagementOptions"
          />
          <q-select
            v-model="budgetTracking"
            label="Budget Tracking"
            :options="budgetTrackingOptions"
          />
          <q-select
            v-model="equipmentMaterialManagement"
            label="Equipment and Material Management"
            :options="equipmentMaterialManagementOptions"
          />
          <q-select
            v-model="safetyCompliance"
            label="Safety and Compliance"
            :options="safetyComplianceOptions"
          />
          <q-select
            v-model="communication"
            label="Communication"
            :options="communicationOptions"
          />
          <q-select
            v-model="reportingAnalytics"
            label="Reporting and Analytics"
            :options="reportingAnalyticsOptions"
          />
          <q-input v-model="customFields" label="Custom Fields" />
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
  name: 'JobSitesAdd',
  setup() {
    const jobSiteName = ref('');
    const address = ref('');
    const phone = ref('');
    const email = ref('');
    const managerName = ref('');
    const hoursOfOperation = ref('');
    const specialInstructions = ref('');
    const taskList = ref('');
    const timeline = ref('');
    const progressTracking = ref('');
    const expenseTracking = ref('');
    const budgetForecasting = ref('');
    const expenseBudgetAlerts = ref('');
    const inventoryManagement = ref('');
    const equipmentRental = ref('');
    const safetyChecklists = ref('');
    const safetyTrainingLogs = ref('');
    const complianceMonitoring = ref('');
    const messaging = ref('');
    const emailCommunication = ref('');
    const videoConferencing = ref('');
    const reporting = ref('');
    const analytics = ref('');

    function submitForm() {
      const jobSite = {
        jobSiteName: jobSiteName.value,
        address: address.value,
        phone: phone.value,
        email: email.value,
        managerName: managerName.value,
        hoursOfOperation: hoursOfOperation.value,
        specialInstructions: specialInstructions.value,
        taskList: taskList.value,
        timeline: timeline.value,
        progressTracking: progressTracking.value,
        expenseTracking: expenseTracking.value,
        budgetForecasting: budgetForecasting.value,
        expenseBudgetAlerts: expenseBudgetAlerts.value,
        inventoryManagement: inventoryManagement.value,
        equipmentRental: equipmentRental.value,
        safetyChecklists: safetyChecklists.value,
        safetyTrainingLogs: safetyTrainingLogs.value,
        complianceMonitoring: complianceMonitoring.value,
        messaging: messaging.value,
        emailCommunication: emailCommunication.value,
        videoConferencing: videoConferencing.value,
        reporting: reporting.value,
        analytics: analytics.value,
      };

      // submit job site to server
      console.log(jobSite);

      // clear form
      jobSiteName.value = '';
      address.value = '';
      phone.value = '';
      email.value = '';
      managerName.value = '';
      hoursOfOperation.value = '';
      specialInstructions.value = '';
      taskList.value = '';
      timeline.value = '';
      progressTracking.value = '';
      expenseTracking.value = '';
      budgetForecasting.value = '';
      expenseBudgetAlerts.value = '';
      inventoryManagement.value = '';
      equipmentRental.value = '';
      safetyChecklists.value = '';
      safetyTrainingLogs.value = '';
      complianceMonitoring.value = '';
      messaging.value = '';
      emailCommunication.value = '';
      videoConferencing.value = '';
      reporting.value = '';
      analytics.value = '';
    }

    return {
      jobSiteName,
      address,
      phone,
      email,
      managerName,
      hoursOfOperation,
      specialInstructions,
      taskList,
      timeline,
      progressTracking,
      expenseTracking,
      budgetForecasting,
      expenseBudgetAlerts,
      inventoryManagement,
      equipmentRental,
      safetyChecklists,
      safetyTrainingLogs,
      complianceMonitoring,
      messaging,
      emailCommunication,
      videoConferencing,
      reporting,
      analytics,
      submitForm,
    };
  },
};
</script>
