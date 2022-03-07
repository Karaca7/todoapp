<template>
  <div>
    <input type="text" v-model="inputexttodo" />

    <label for="">Başlangıç tarii</label>
    <input type="date" v-model="firstdate" />
    <label for="">Bitiş tarihi</label> <input type="date" v-model="lastdate" />
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "FindTodo",
  props: ["alltodo"],

  data() {
    return {
      inputexttodo: null,
      resultdata: null,
      firstdate: null,
      lastdate: null,
    };
  },
  methods: {
    finderTodo() {
      for (let item in this.alltodo) {
        //console.log(this.alltodo[item]);
        let tododata = this.alltodo[item]["tododata"];
        if (tododata == this.inputexttodo) {
          this.resultdata = tododata;
          console.log(this.resultdata);
          return item;
        }
      }
    },

    findrangedateTodo() {
      let lastdate = new Date(this.lastdate);
      let firstdate = new Date(this.firstdate);
      let tempdaterange = [];

      for (let item in this.alltodo) {
        let tododate = this.alltodo[item]["lastdate"];
        tododate = new Date(tododate);
        console.log(tododate > firstdate);
        console.log(tododate < lastdate);
        //console.log(tododate);
        if (tododate >= firstdate && tododate <= lastdate) {
          console.log(item);
          tempdaterange.push(item);
        }
      }

      console.log(typeof tempdaterange);
      return tempdaterange;
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
