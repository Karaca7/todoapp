<template>
  <div>
    <label for="">Todo Name</label> <input type="text" v-model="inputexttodo" />

    <label for="">First Date</label>
    <input type="date" v-model="firstdate" />
    <label for="">Last Date</label> <input type="date" v-model="lastdate" />
    <label for=""> Is Done:</label><input type="checkbox" v-model="isdone" />
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "FindTodo",
  props: ["alltodo"],

  data() {
    return {
      inputexttodo: String(),
      resultdata: null,
      firstdate: String(),
      lastdate: String(),
      isdone: null,
    };
  },
  methods: {
    findertodos() {
      let text = this.inputexttodo.length > 0;
      let lastdate = this.lastdate != 0 && this.lastdate !== null;
      let firsate = this.firstdate != 0 && this.firstdate !== null;
      let done = this.isdone == true;

      let elementactivite = [
        [text, "text"],
        [firsate, "firstdate"],
        [lastdate, "lastdate"],

        [done, "done"],
      ];
      let elementActivateText = "";
      for (let index in elementactivite) {
        if (elementactivite[index][0] != false) {
          elementActivateText += "/" + elementactivite[index][1];
        }
      }

      //tüm alt kümelerini  yazma vakti !!!

      switch (elementActivateText) {
        case "/text/firstdate/lastdate/done": {
          //1 ombinasyonu   [a,b,c] ,[a,b],[a,c],[b,c]
          let lastdate = new Date(this.lastdate);
          let firstdate = new Date(this.firstdate);

          let result = this.alltodo.filter((obj) => {
            this.tododata == this.inputexttodo &&
              new Date(obj.lastdate) >= firstdate &&
              new Date(obj.lastdate) <= lastdate &&
              obj.isDone == this.isdone;
          });

          console.log("full");
          console.log(result);
          return result;
        }
        case "/text/firstdate/lastdate": {
          console.log("missing date");
          let lastdate = new Date(this.lastdate);
          let firstdate = new Date(this.firstdate);
          let result = this.alltodo.filter(
            (obj) =>
              obj.tododata == this.inputexttodo &&
              new Date(obj.lastdate) >= firstdate &&
              new Date(obj.lastdate) <= lastdate
          );
          console.log(result);
          return result;
        }

        case "/firstdate/lastdate/done": {
          console.log("missing date");
          let lastdate = new Date(this.lastdate);
          let firstdate = new Date(this.firstdate);
          let result = this.alltodo.filter(
            (obj) =>
              new Date(obj.lastdate) >= firstdate &&
              new Date(obj.lastdate) <= lastdate &&
              obj.isDone == this.isdone
          );
          console.log(result);
          return result;
        }

        case "/text/done": {
          console.log("missing date");

          let result = this.alltodo.filter(
            (obj) =>
              obj.tododata == this.inputexttodo && obj.isDone == this.isdone
          );
          console.log(result);
          return result;
        }

        case "/text": {
          console.log("just text");
          let result = this.alltodo.filter(
            (obj) => obj.tododata == this.inputexttodo
          );
          console.log(result);
          return result;
        }
        case "/firstdate/lastdate": {
          console.log("just date");

          let lastdate = new Date(this.lastdate);
          let firstdate = new Date(this.firstdate);

          let result = this.alltodo.filter(
            (obj) =>
              new Date(obj.lastdate) >= firstdate &&
              new Date(obj.lastdate) <= lastdate
          );
          console.log(result); //
          return result;
        }

        case "/done": {
          console.log(typeof this.isdone);
          console.log("just done");

          let result = this.alltodo.filter((obj) => obj.isDone == this.isdone);
          console.log(result); //
          return result;
        }
      }
    },
  },
};
</script>

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
