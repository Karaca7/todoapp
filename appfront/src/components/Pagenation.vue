<template>
  <div class="container">
    <!-- page item -->
    <hr />
    <!--  -->
    <ul v-for="todo in nowpagelist" :key="todo">
      <li :ref="todo._id">
        <div class="wrapimg">
          <span v-if="todo.todoimg"><img v-bind:src="todo.todoimg" /></span>
          <span v-else> <span class="blacker">No image ||</span></span>
        </div>
        <div class="wrapcontents">
          <div>
            <span class="pinker">Görev:</span> {{ todo.tododata }} |
            <span class="pinker"> Önem:</span> {{ todo.weight }} |
            <span class="pinker">Kategori:</span>{{ todo.todotype }} ||<span
              class="pinker"
            >
              Last Day:</span
            >{{ dateconvert(todo.lastdate) }}
            |
          </div>
          <div class="wrapbuttons">
            <span v-if="mode !== true">
              <button @click="todoremove(todo._id)">Sil</button>
              <button>
                <a :href="'#/details/' + todo._id" style="color: white"
                  >Düzenle</a
                >
              </button>
              <button @click="tododone(todo._id)">Tamam</button>
            </span>
            <span v-if="mode === true">
              <p v-if="todo.isDone">Mission complete :)</p>
              <p v-else>Active Todo</p>
            </span>
          </div>
        </div>
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
import moment from "moment";

export default {
  name: "Pagenation",
  props: ["datas", "mode", "ortherdata"],

  data() {
    return {
      pagelsit: [],
      nowpagelist: [],
      pagesize: 0,
      nownuber: 0,
      sa: this.ortherdata,
      //resulttempdata: null,
    };
  },

  methods: {
    dateconvert(date) {
      return moment(date).format("YYYY-MM-DD");
    },
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
  watch: {
    ortherdata(newdata, olddata) {
      // console.log(newdata, olddata);
      // console.log(newdata.length);
      // console.log(typeof newdata);

      if (newdata.length == undefined) {
        console.log("buraa2");
        this.nowpagelist = [newdata];
      }

      if (newdata.length == 1) {
        this.nowpagelist = newdata;
      }
      if (newdata.length > 1) {
        console.log("buraa");
        console.log(newdata.length);

        this.nowpagelist = newdata;
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
  color: #444645;
  background: rgb(238, 236, 236);
  border-radius: 100px;
  width: 100%;
}
a {
  color: white;
}
img {
  height: 7vh;
  margin-top: 2%;
  display: inline;

  border-radius: 100%;
}
.container {
  width: 50%;
  margin: auto;
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

.wrapimg {
  margin-left: 0px;
  margin-top: 5px;
  /* display: inline; */

  width: 20%;
}

.wrapbuttons {
  margin-top: 5px;
  margin-bottom: 5px;
}

.pinker {
  color: rgb(255, 39, 104);
  font-weight: bold;
}
.blacker {
  color: #444645;
  font-weight: bold;
}
</style>
