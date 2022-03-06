<template>
  <div class="about">
    <h1>Todo list page</h1>

    <br />

    <br />

    <Pagenation :datas="datass" ref="pagen" />
  </div>
</template>

<script>
import Pagenation from "../components/Pagenation.vue";
import axios from "axios";

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
      datass: [],
    };
  },

  methods: {
    async getalltodo() {
      let alltodo = await axios.get("http://localhost:5500/getalltodo");

      for (let index in alltodo["data"]) {
        this.datass.push(alltodo.data[index]);
      }
      console.log("getçi");
      console.log(alltodo["data"]);
      //callback olarakta çağırabilridim //fakat bob amca clean code kurallarında:  bir fonksiyon sadece tanımlanan adı dışında iş yapamaz der
      // await this.$refs.pagen.getdatas();
      //await this.$refs.pagen.getpage(1);
    },
  },

  async mounted() {
    await this.getalltodo();
    await this.$refs.pagen.getdatas();
    await this.$refs.pagen.getpage(1);
  },
  components: { Pagenation: Pagenation },
};
</script>
