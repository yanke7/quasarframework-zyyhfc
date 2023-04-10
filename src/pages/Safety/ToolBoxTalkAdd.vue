<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add New Toolbox Talk</h2>
        </q-card-section>

        <q-card-section>
          <q-input v-model="categoryName" label="Category Name" />
          <q-input v-model="description" label="Description" type="textarea" />
          <q-input v-model="talkingPoints" label="Talking Points" type="textarea" />
          <q-input v-model="examples" label="Examples" type="textarea" />
          <q-input v-model="actionItems" label="Action Items" type="textarea" />
          <q-card>
            <q-card-section>
              <h3 class="text-h5">Signatures</h3>
            </q-card-section>
            <q-card-section>
              <q-input v-model="facilitatorSignature" label="Facilitator Signature" />
              <q-input v-model="workerSignature" label="Worker Signature" />
            </q-card-section>
          </q-card>
          <q-input v-model="date" label="Date" type="date" />
          <q-input v-model="location" label="Location" />
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
  name: 'ToolBoxTalkAdd',
  data() {
    return {
      categoryName: '',
      description: '',
      talkingPoints: '',
      examples: '',
      actionItems: '',
      facilitatorSignature: '',
      workerSignature: '',
      date: '',
      location: '',
    };
  },
  methods: {
    submitForm() {
      const toolboxTalk = {
        category: this.categoryName,
        description: this.description,
        talkingPoints: this.talkingPoints,
        examples: this.examples,
        actionItems: this.actionItems,
        facilitatorSignature: this.facilitatorSignature,
        workerSignature: this.workerSignature,
        date: this.date,
        location: this.location,
      };

      // submit toolbox talk to server
      console.log(toolboxTalk);

      // clear form
      this.categoryName = '';
      this.description = '';
      this.talkingPoints = '';
      this.examples = '';
      this.actionItems = '';
      this.facilitatorSignature = '';
      this.workerSignature = '';
      this.date = '';
      this.location = '';
    },
  },
};
</script>
