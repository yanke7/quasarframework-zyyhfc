<template>
  <q-page>
    <q-form @submit="submitForm">
      <q-card>
        <q-card-section>
          <h2 class="text-h4">Add Job Site Safety Information</h2>
        </q-card-section>
        <q-card-section>
          <q-checkbox
            v-model="confinedSpaces"
            label="Working in Confined Spaces"
          />
          <q-checkbox
            v-model="hazardousChemicals"
            label="Use of Hazardous Chemicals"
          />
          <q-checkbox v-model="noiseExposure" label="Noise Exposure" />
          <q-checkbox
            v-model="movingHeavyObjects"
            label="Moving Heavy Objects"
          />
          <q-checkbox
            v-model="tripFallHazards"
            label="Slip, Trip, and Fall Hazards"
          />
          <q-checkbox
            v-model="workingWithResidents"
            label="Working with Residents or Visitors"
          />
          <q-checkbox v-model="fireSafety" label="Fire Safety" />
          <q-checkbox v-model="workingAlone" label="Working Alone" />
          <q-checkbox
            v-model="weatherHazards"
            label="Weather-Related Hazards"
          />
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
  name: 'JobSiteSafetyAdd',
  data() {
    return {
      confinedSpaces: false,
      hazardousChemicals: false,
      noiseExposure: false,
      movingHeavyObjects: false,
      tripFallHazards: false,
      workingWithResidents: false,
      fireSafety: false,
      workingAlone: false,
      weatherHazards: false,
      notes: '',
    };
  },
  methods: {
    submitForm() {
      const jobSiteSafety = {
        confinedSpaces: this.confinedSpaces,
        hazardousChemicals: this.hazardousChemicals,
        noiseExposure: this.noiseExposure,
        movingHeavyObjects: this.movingHeavyObjects,
        tripFallHazards: this.tripFallHazards,
        workingWithResidents: this.workingWithResidents,
        fireSafety: this.fireSafety,
        workingAlone: this.workingAlone,
        weatherHazards: this.weatherHazards,
        notes: this.notes,
      };

      // submit jobSiteSafety to server
      console.log(jobSiteSafety);

      // clear form
      this.confinedSpaces = false;
      this.hazardousChemicals = false;
      this.noiseExposure = false;
      this.movingHeavyObjects = false;
      this.tripFallHazards = false;
      this.workingWithResidents = false;
      this.fireSafety = false;
      this.workingAlone = false;
      this.weatherHazards = false;
      this.notes = '';
    },
  },
};
</script>
