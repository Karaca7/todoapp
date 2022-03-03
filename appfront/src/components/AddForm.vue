<template>
  <div class="hello">
    <div>
      <input type="text" name="" id="" />
      <br />

      <input type="range" min="1" max="10" step="1" v-model="value" />
      <p style="display: inline">{{ value }}</p>
      <br />
      <input type="file" name="" id="" alt="" />
      <br />

      <select name="todo" id="">
        <option value="1">İş</option>
        <option value="2">Okul</option>
        <option value="3">Aile</option>
        <option value="4">Ödemeler</option>
        <option value="5">Kişisel Gelişim</option>
      </select>
      <hr />
      <button @click="weightShifter">add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    weightShifter() {
      console.log("gönderildi");
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
