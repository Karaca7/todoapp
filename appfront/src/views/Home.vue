<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <AddForm />
  </div>
</template>

<script>
// @ is an alias to /src
import AddForm from "@/components/AddForm.vue";

export default {
  name: "Home",
  components: {
    AddForm,
  },
};
</script>
