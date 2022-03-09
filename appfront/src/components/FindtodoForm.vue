<template>
  <div>
    <label for="">Todo Name</label> <input type="text" v-model="inputexttodo" />

    <label for="">First Date</label>
    <input type="date" v-model="firstdate" />
    <label for="">Last Date</label> <input type="date" v-model="lastdate" />
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

    findrangedateTodos() {
      let lastdate = new Date(this.lastdate);
      let firstdate = new Date(this.firstdate);
      let tempdaterange = [];

      for (let item in this.alltodo) {
        let tododate = this.alltodo[item]["lastdate"];
        tododate = new Date(tododate);

        if (tododate >= firstdate && tododate <= lastdate) {
          tempdaterange.push(this.alltodo[item]);
        }
      }

      console.log(tempdaterange);
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
input {
  border: none; /* <-- This thing here */
  border: solid 1px #ccc;
  border-radius: 10px;
}
input:hover {
  color: #444645;
  background: #ddd;
}
</style>
