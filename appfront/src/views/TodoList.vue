<template>
  <div class="about">
    <h1>Todo list page</h1>

    <br />

    <br />

    <Pagenation :datas="datalist" />
  </div>
</template>

<script>
import Pagenation from "../components/Pagenation.vue";
export default {
  name: "todolist",
  data() {
    return {
      datalist: [
        { id: 1, todo: "deneme1", type: "iş", weight: 10 },
        { id: 2, todo: "deneme2", type: "Ödemeler", weight: 8 },
        { id: 3, todo: "denemasde2", type: "Ödesadmeler", weight: 4 },
        { id: 4, todo: "deneme2", type: "Ödemeler", weight: 3 },
        { id: 5, todo: "deneme2", type: "Ödemeler", weight: 2 },
        { id: 6, todo: "deneme2", type: "Ödemeler", weight: 1 },
        { id: 7, todo: "deneme2", type: "Ödemeler", weight: 10 },
      ],
    };
  },
  methods: {
    todo() {
      console.log("yapıldı!!!!");
    },
  },

  components: { Pagenation: Pagenation },
};
</script>
