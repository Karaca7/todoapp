<template>
  <div>
    <h1>pagenation</h1>
    <!-- page item -->

    <!--  -->
    <ul v-for="todo in nowpagelist" :key="todo">
      <li>{{ todo.tododata }}|| {{ todo.weight }} | {{ todo.todotype }}</li>
    </ul>

    <!-- page number -->
    <ul
      v-for="pagenumber in pagesize"
      :key="pagenumber"
      style="display: inline"
    >
      <span v-if="pagenumber != nownuber">
        <button style="display: inline" @click="getpage(pagenumber)">
          {{ pagenumber }}
        </button>
      </span>
    </ul>
    <!--  -->
    <hr />
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Pagenation",
  props: ["datas"],

  data() {
    return {
      // datas: [],
      pagelsit: [],
      nowpagelist: [],
      pagesize: 0,
      nownuber: 0,
    };
  },

  methods: {
    getpage(number) {
      console.log(number);
      this.nownuber = number;
      this.nowpagelist = this.pagelsit[number - 1];
      this.pagesize = Math.floor(this.datas.length / 2) + 1;
    },
    getdatas() {
      let range1 = 0;
      let range2 = 2;

      let dlist = this.datas;
      for (
        let number = 0;
        number <= Math.floor(dlist.length / 2); //işlem 2
        number++
      ) {
        console.log(dlist.slice(range1, range2));
        this.pagelsit.push(dlist.slice(range1, range2));
        range1 = range2;
        range2 += 2;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
