<template>
  <div>
    <h1>pagenation</h1>
    <!-- page item -->

    <!--  -->
    <ul v-for="todo in nowpagelist" :key="todo">
      <li :ref="todo._id">
        <span v-if="todo.todoimg"><img v-bind:src="todo.todoimg" /></span>
        <span v-else> No image ||</span>

        Görev: {{ todo.tododata }}|| Önem: {{ todo.weight }} | Kategori:{{
          todo.todotype
        }}

        <button @click="todoremove(todo._id)">Sil</button>
        <button><a :href="'#/details/' + todo._id">Düzenle</a></button>
        <button @click="tododone(todo._id)">Tamam</button>
      </li>
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
import axios from "axios";
export default {
  name: "Pagenation",
  props: ["datas"],

  data() {
    return {
      pagelsit: [],
      nowpagelist: [],
      pagesize: 0,
      nownuber: 0,
    };
  },

  methods: {
    async todoremove(todoid) {
      await axios.post(`http://localhost:5500/removetodo/${todoid}`);
      this.elemetremover(todoid);
    },
    async tododone(todoid) {
      await axios.post(`http://localhost:5500/donetodo/${todoid}`);
      this.elemetremover(todoid);
    },

    elemetremover(todoid) {
      for (let i in this.pagelsit) {
        for (let z in this.pagelsit[i]) {
          let data = this.pagelsit[i][z];
          if (data["_id"] == todoid) {
            this.pagelsit[i].splice(z, 1);
          }
        }
      }
    },
    getpage(number) {
      // console.log(number);
      this.nownuber = number;
      this.nowpagelist = this.pagelsit[number - 1];
      this.pagesize = Math.floor(this.datas.length / 5) + 1;
    },
    createPages() {
      let range1 = 0;
      let range2 = 5;

      let dlist = this.datas;
      for (let number = 0; number <= Math.floor(dlist.length / 5); number++) {
        // console.log(dlist.slice(range1, range2));
        this.pagelsit.push(dlist.slice(range1, range2));
        range1 = range2;
        range2 += 5;
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
img {
  width: 10%;
  height: 10%;
  border-radius: 100%;
}
</style>
