<template>
  <div class="addform">
    <div class="wraper">
      {{ verificationMessage }}<br />

      <div class="inputs">
        <div class="wrapinputs">
          <label for="todotext">To Do: </label>
          <input type="text" name="" id="" v-model="tododata" />
        </div>
        <div class="wrapinputs">
          <label for="">İmportance </label>
          <select name="todo" id="" v-model="todoimportance">
            <option value="1">Önemli</option>
            <option value="2">Çok Önemli</option>
            <option value="3">Hiç bu kadar önemli olmamıştı</option>
          </select>
        </div>
        <div class="wrapinputs">
          <label for="">Todo type:</label
          ><select name="todo" id="" v-model="todotype">
            <option value="İş">İş</option>
            <option value="Okul">Okul</option>
            <option value="Aile">Aile</option>
            <option value="Ödemeler">Ödemeler</option>
            <option value="Kişisel Gelişim">Kişisel Gelişim</option>
          </select>
        </div>
        <div class="wrapinputs">
          <label for="">Date:</label
          ><input type="date" name="" id="" v-model="tdate" />
        </div>
        <div class="wrapinputs">
          <label for="">File: </label
          ><input type="file" name="" id="" @change="onFileChanged" />
        </div>
        <hr />
        <span v-if="addkey === 'true'">
          <button @click="addTodo">Add</button>
        </span>
        {{ alltodo }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FormData from "form-data";
export default {
  name: "AddForm",
  props: ["addkey"],
  data() {
    return {
      tododata: null,
      todoimportance: 1,
      todotype: "İş",
      tdate: null,
      //
      alltodo: null,
      selectedFile: null,

      verificationMessage: null,
      tempimg: null,
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
      //console.log(this.selectedFile);
      this.tempimg = event.target.files[0];
    },
    async addTodo() {
      let form = new FormData();

      let tdata = this.tododata;
      let timpor = this.todoimportance;
      let ttype = this.todotype;
      let ndate = new Date(Date.now());
      let tdate = new Date(this.tdate);

      form.append("weight", timpor);
      form.append("todotype", ttype);
      form.append("nowdate", ndate);
      form.append("lastdate", tdate);
      form.append("isdone", false);

      //validation işlemini fazla uzatmak istemiyorum. kodu revive yapmaya vaktim kalırsa düzenlerim
      if (tdata != null && tdata != "") {
        form.append("tododata", tdata);
        let tdatestr = new Date(
          `${tdate.getUTCFullYear()}${tdate.getMonth()}${tdate.getDay()}`
        );
        let ndatestr = new Date(
          `${ndate.getUTCFullYear()}${ndate.getMonth()}${ndate.getDay()}`
        );
        // console.log(tdatestr);
        // console.log(tdatestr > ndatestr);
        // console.log(ndatestr);

        if (ndatestr >= tdatestr) {
          this.verificationMessage = null;
          if (this.selectedFile != null) {
            if (
              this.selectedFile.type == "image/png" ||
              this.selectedFile.type == "image/jpg" ||
              this.selectedFile.type == "image/jpeg"
            ) {
              this.verificationMessage = null;

              form.append("media", this.selectedFile);

              await axios.post(`http://localhost:5500/addtodos/`, form);
              this.alltodo = "Kayıt başarılı !";
            } else {
              this.verificationMessage =
                "Lütfen bir png/jpg/jpeg formatında bir dosya seçiniz";
            }
          } else {
            form.append("media", null);
            await axios.post(`http://localhost:5500/addtodos/`, form);
            this.alltodo = "Kayıt başarılı !";
          }
        } else {
          this.verificationMessage =
            "Lütfen bu günün tarihinden büyük  veya eşit bir tarih giriniz";
        }
      } else {
        this.verificationMessage = "Lütfen bir başlık giriniz";
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
.addform {
  margin-top: 2%;
  position: relative;
}
.inputs {
  width: 66%;
  margin: auto;
}
label {
  display: inline;
  margin-left: 2%;
  color: rgb(255, 39, 104);
  font-weight: bold;
}
input {
  width: 70%;
  display: inline;
  border: none; /* <-- This thing here */
  border: solid 1px #ccc;
  border-radius: 10px;
  height: 50px;
}
input:hover {
  color: #444645;
  background: #ddd;
}
select {
  width: 70%;
  border: none; /* <-- This thing here */
  border: solid 1px #ccc;
  border-radius: 10px;
  height: 50px;
}
/* for chrome */
select:hover {
  color: #444645;
  background: #ddd;
}
.wrapinputs {
  margin-top: 2%;
}

/* spesific adjust */
@media only screen and (max-width: 1500px) {
  .wrapinputs:nth-child(2) > select {
    width: 67%;
  }
  .wrapinputs:nth-child(3) > select {
    width: 69%;
  }
  .wrapinputs:nth-child(4) > input {
    width: 72%;
  }
  .wrapinputs:nth-child(5) > input {
    width: 73%;
    border: none;
    border-radius: none;
    height: 50px;
  }

  .wrapinputs:nth-child(5) > input:hover {
    color: #444645;
    background: white;
  }
}

@media only screen and (min-width: 1500px) {
  .wrapinputs:nth-child(1) > input {
    width: 71%;
  }
  .wrapinputs:nth-child(2) > select {
    width: 68%;
  }
  .wrapinputs:nth-child(3) > select {
    width: 69%;
  }
  .wrapinputs:nth-child(4) > input {
    width: 72%;
  }
  .wrapinputs:nth-child(5) > input {
    width: 72%;
    height: 20px;
    border: none;
    border-radius: none;
    height: 50px;
  }
  .wrapinputs:nth-child(5) > input:hover {
    color: #444645;
    background: white;
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
/* .addform {
  margin-top: 2%;
}

.wraper {
  background-color: bisque;
} */
</style>
