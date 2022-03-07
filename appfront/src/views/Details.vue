<template>
  <div>
    <h1>This Details</h1>

    <a href="#/todolist">listeye geri dön</a>
    {{ verificationMessage2 }}<br />
    <AddForm ref="detailform" />
    <button @click="changeTodo">Değiştir</button>{{ alltodo }}
  </div>
</template>

<script>
// @ is an alias to /src
import { useRoute } from "vue-router";
import axios from "axios";
import AddForm from "@/components/AddForm.vue";
import moment from "moment";
import FormData from "form-data";

export default {
  name: "Details",

  data() {
    return {
      todo: null,
      todoid: null,
      verificationMessage2: null,
      alltodo: null,
    };
  },
  async mounted() {
    let route = useRoute();

    this.todoid = route.params.todoid;
    await this.setterdate(route);
  },

  methods: {
    async setterdate(route) {
      let todoresult = await axios.get(
        `http://localhost:5500/gettodo/${route.params.todoid}`
      );
      this.todo = todoresult["data"];

      this.$refs.detailform.tododata = this.todo.tododata;
      this.$refs.detailform.todoimportance = this.todo.weight;
      this.$refs.detailform.todotype = this.todo.todotype;
      this.$refs.detailform.tdate = this.convertdate(this.todo.lastdate);
    },

    convertdate(date) {
      date = new Date(date);
      return moment(date).format("YYYY-MM-DD");
    },

    async changeTodo() {
      let form = new FormData();

      let tdata = this.$refs.detailform.tododata;
      //console.log(tdata === String());
      let timpor = this.$refs.detailform.todoimportance;
      let ttype = this.$refs.detailform.todotype;
      let ndate = new Date(Date.now());
      let tdate = new Date(this.$refs.detailform.tdate);
      //let image = this.$refs.selectedFile;

      // console.log("img:", this.$refs.detailform.tempimg);
      //console.log(this.todoid);
      form.append("todoidasdsad", this.todoid);
      form.append("weight", timpor);
      form.append("todotype", ttype);
      form.append("nowdate", ndate);
      form.append("lastdate", tdate);
      form.append("isdone", false);
      form.append("tododata", tdata);

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
          this.verificationMessage2 = null;
          if (this.$refs.detailform.tempimg != null) {
            if (
              this.$refs.detailform.tempimg.type == "image/png" ||
              this.$refs.detailform.tempimg.type == "image/jpg" ||
              this.$refs.detailform.tempimg.type == "image/jpeg"
            ) {
              this.verificationMessage2 = null;
              console.log("bura", this.$refs.detailform.tempimg);
              form.append("media", this.$refs.detailform.tempimg);
              //this.tempimg = this.$refs.detailform.tempimg;
              await axios.post(`http://localhost:5500/puttodo/`, form);
              this.alltodo = "Kayıt başarılı !";
            } else {
              this.verificationMessage2 =
                "Lütfen bir png/jpg/jpeg formatında bir dosya seçiniz";
            }
          } else {
            form.append("media", null);
            await axios.post(`http://localhost:5500/puttodo/`, form);
            this.alltodo = "Kayıt başarılı !";
          }
        } else {
          this.verificationMessage2 =
            "Lütfen bu günün tarihinden büyük  veya eşit bir tarih giriniz";
        }
      } else {
        this.verificationMessage2 = "Lütfen bir başlık giriniz";
      }
    },

    remvoeimage() {
      return true;
    },
  },
  components: { AddForm: AddForm },
};
</script>
