<template>
  <div>
    <h1>pagenation</h1>
    <!-- page item -->
    <ul v-for="item in nowpagelist" :key="item">
      <li>
        {{ item.id }} || {{ item.todo }}
        <a :href="'#/details/' + item.id">detay</a>
        <button @click="todo">yapıldı</button>
        <a :href="'#/details/' + item.id">sil</a>
      </li>
    </ul>
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
  </div>
</template>

<script>
export default {
  name: "Pagenation",
  props: ["datas"],
  data() {
    return {
      pagelsit: [],
      nowpagelist: [],
      pagesize: Math.floor(this.datas.length / 2) + 3,
      nownuber: 1,
    };
  },

  methods: {
    getpage(number) {
      this.nownuber = number;
      this.nowpagelist = this.pagelsit[number - 1];
    },
    getdatas() {
      let range1 = 0;
      let range2 = 2;

      let dlist = this.datas;
      console.log(this.datas.length);
      for (
        let number = 0;
        number <= Math.floor(dlist.length / 2) + 2;
        number++
      ) {
        range1 += 1;
        range2 += 1;

        console.log(dlist.slice(range1 - 1, range2 - 1));
        this.pagelsit.push(dlist.slice(range1 - 1, range2 - 1));
      }
    },
  },

  mounted() {
    this.getdatas();
    this.getpage(1);
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
