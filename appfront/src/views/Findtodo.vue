<template>
  <div>
    <img class="rotate" alt="tasarımım" src="../assets/image2.png" />

    <h1>Find Todo List</h1>
    <findtodoform :alltodo="dataList" ref="findercomp" />
    <div class="finderbuttons">
      <button @click="gettodo">Find</button>
      <button @click="lodertodo">Clear</button>
    </div>

    <pagenation-2
      :datas="dataList"
      ref="pagen2"
      :mode="true"
      :ortherdata="orther"
    />
  </div>
</template>

<script>
import Pagenation2 from "../components/Pagenation.vue";
import FindtodoForm from "../components/FindtodoForm.vue";

import axios from "axios";
export default {
  name: "findtodolist",
  data() {
    return {
      dataList: null,
      orther: null,
    };
  },

  methods: {
    async getalltodo() {
      let alltodo = await axios.get("http://localhost:5500/getalltodo");
      this.dataList = this.sorter(alltodo);
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

    gettodo() {
      let temparray = this.$refs.findercomp.findertodos(); // it is need handel ->  can take undifend data

      //console.log(temparray);
      this.orther = temparray;
    },

    async lodertodo() {
      await this.getalltodo();
      await this.$refs.pagen2.createPages();
      await this.$refs.pagen2.getpage(1);
    },
  },

  async mounted() {
    await this.lodertodo();
  },
  components: { findtodoform: FindtodoForm, pagenation2: Pagenation2 },
};
</script>

<style scoped>
img {
  width: 20%;
  border-radius: 100%;
}

.rotate {
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

button {
  background-color: rgb(255, 39, 104);
  border: solid 1px #ccc;
  border-radius: 10px;
  height: 25px;
  width: 10%;
  color: beige;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
}
button:hover {
  color: white;
  background: #444645;
}
button > a {
  text-decoration: none;
  color: white;
}
.finderbuttons {
  margin-top: 1%;
}

.pinker {
  color: rgb(255, 39, 104);
}
</style>
