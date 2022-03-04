<template>
  <div>
    <h1>This Details</h1>
    {{ pageNumber }}
    <a href="#/todolist">listeye geri dön</a>
  </div>
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
