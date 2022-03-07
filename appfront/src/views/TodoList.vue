<template>
  <div class="about">
    <h1>Todo list page</h1>

    <br />

    <br />

    <pagenation-1 :datas="dataList" ref="pagen" />
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
      let alltodo = await axios.get("http://localhost:5500/isdonetodo");
      this.dataList = this.sorter(alltodo);

      //callback olarakta çağırabilridim //fakat bob amca clean code kurallarında:  bir fonksiyon sadece tanımlanan adı dışında iş yapamaz der
      // await this.$refs.pagen.createPages();
      //await this.$refs.pagen.getpage(1);
    },

    sorter(alltodo) {
      let templist = [];

      for (let index in alltodo["data"]) {
        templist.push(alltodo.data[index]);
      }

      let temptodolist = templist.sort((a, b) => {
        return b.weight - a.weight;
      });

      return temptodolist;
    },
  },

  async mounted() {
    await this.getalltodo();
    await this.$refs.pagen.createPages();
    await this.$refs.pagen.getpage(1);
  },
  components: { Pagenation1: Pagenation },
};
</script>
