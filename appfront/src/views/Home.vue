<template>
  <div class="home">
    <img class="rotate" alt="tasarımım" src="../assets/tasarımım.png" />
    <AddForm addkey="true" />
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
<style scoped>
img {
  width: 20%;
  border-radius: 100%;
}

.rotate {
  animation: rotation 10s;
  animation-iteration-count: 3;
  /* animation-iteration-count: infinite; */
  animation-delay: 5;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
