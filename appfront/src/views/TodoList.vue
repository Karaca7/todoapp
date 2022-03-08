<template>
  <div class="about">
    <img class="rotate2" src="../assets/image1.png" />
    <h1>Todo List Page</h1>

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
<style scoped>
img {
  width: 20%;
  border-radius: 100%;
}

.rotate2 {
  animation: rotation 10s;
  animation-iteration-count: 2;
  /* animation-iteration-count: infinite; */
  animation-delay: 10;
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
