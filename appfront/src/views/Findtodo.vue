<template>
  <div>
    <h1>Findtodolist</h1>

    <br />
    <findform />

    <input type="text" name="" id="" /> <button>tıkla</button>
  </div>
</template>

<script>
import FindTodoForm from "../components/FindtodoForm.vue";
export default {
  name: "findtodolist",
  data() {
    return {};
  },

  components: { findform: FindTodoForm },
};
</script>
