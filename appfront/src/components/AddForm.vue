<template>
  <div class="hello">
    <div>
      {{ verificationMessage }}<br />
      <input type="text" name="" id="" v-model="tododata" />
      <br />

      <select name="todo" id="" v-model="todoimportance">
        <option value="1">Önemli</option>
        <option value="2">Çok Önemli</option>
        <option value="3">Hiç bu kadar önemli olmamıştı</option>
      </select>
      <br />
      <select name="todo" id="" v-model="todotype">
        <option value="1">İş</option>
        <option value="2">Okul</option>
        <option value="3">Aile</option>
        <option value="4">Ödemeler</option>
        <option value="5">Kişisel Gelişim</option>
      </select>
      <br />
      <input type="date" name="" id="" v-model="tdate" />
      <br />
      <input type="file" name="" id="" @change="onFileChanged" />

      <hr />
      <button @click="addTodo">add</button>

      {{ alltodo }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FormData from "form-data";
export default {
  name: "AddForm",

  data() {
    return {
      tododata: null,
      todoimportance: 1,
      todotype: 1,
      tdate: null,
      //
      alltodo: null,
      selectedFile: null,

      verificationMessage: null,
    };
  },
  methods: {
    onFileChanged(event) {
      this.selectedFile = event.target.files[0];
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

      //verification işlemini fazla uzatmak istemiyorum. kodu revive yapmaya vaktim kalırsa düzenlerim
      if (tdata != null && tdata != "") {
        form.append("tododata", tdata);
        let tdatestr = new Date(
          `${tdate.getUTCFullYear()}${tdate.getMonth()}${tdate.getDay()}`
        );
        let ndatestr = new Date(
          `${ndate.getUTCFullYear()}${ndate.getMonth()}${ndate.getDay()}`
        );
        console.log(tdatestr);
        console.log(tdatestr > ndatestr);
        console.log(ndatestr);

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
</style>
