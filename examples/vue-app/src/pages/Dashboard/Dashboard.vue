<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Dashboard</h1>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      apexLoading: false,
    };
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.apexLoading = true;
    });
  },
};
</script>
