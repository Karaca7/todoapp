<template>
  <h1>This Details</h1>
  {{ pageNumber }}
</template>

<script>
// @ is an alias to /src
import { useRoute } from "vue-router";
export default {
  name: "Details",
  components: {},
  data() {
    return {
      pageNumber: null,
    };
  },
  mounted() {
    let route = useRoute();
    this.pageNumber = route.params.todoid;
    console.log(route.params.todoid);
  },
};
</script>
