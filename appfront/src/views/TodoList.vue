<template>
  <div class="about">
    <h1>Todo list page</h1>

    <br />

    <br />

    <Pagenation :datas="dataList" ref="pagen" />
  </div>
</template>

<script>
import Pagenation from "../components/Pagenation.vue";
import axios from "axios";

export default {
  name: "todolist",
  data() {
    return {
      dataList: [],
      removeid: null,
    };
  },

  methods: {
    async getalltodo() {
      let alltodo = await axios.get("http://localhost:5500/getalltodo");

      for (let index in alltodo["data"]) {
        this.dataList.push(alltodo.data[index]);
      }
      // console.log("getçi");
      // console.log(alltodo["data"]);
      //callback olarakta çağırabilridim //fakat bob amca clean code kurallarında:  bir fonksiyon sadece tanımlanan adı dışında iş yapamaz der
      // await this.$refs.pagen.createPages();
      //await this.$refs.pagen.getpage(1);
    },
  },

  async mounted() {
    await this.getalltodo();
    await this.$refs.pagen.createPages();
    await this.$refs.pagen.getpage(1);
  },
  components: { Pagenation: Pagenation },
};
</script>
