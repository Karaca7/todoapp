<template>
  <div>
    <h1>Findtodolist</h1>
    <findtodoform :alltodo="dataList" ref="findercomp" />
    <button @click="findtodo">Ara</button
    ><button @click="lodertodo">Geri</button>
    <button @click="findrangedatetodo">tarih ara</button>
    <br />
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

    findtodo() {
      //console.log(this.$refs.findercomp.finderTodo());
      let item = this.$refs.findercomp.finderTodo();

      if (item == undefined) {
        this.orther = this.dataList;
        console.log("ahandaaa");
      } else {
        this.orther = this.dataList[item];
      }
    },

    findrangedatetodo() {
      let temparray = new Array();
      let rangearray = this.$refs.findercomp.findrangedateTodo();
      for (let item in this.dataList) {
        if (rangearray[item] == item) {
          temparray.push(this.dataList[item]);
        }
      }
      this.orther = temparray;
      //console.log(temparray);
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
