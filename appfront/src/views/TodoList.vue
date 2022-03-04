<template>
  <div class="about">
    <h1>Todo list page</h1>

    <br />
    {{ datas }}
    <br />
    <ul v-for="item in datas2" :key="item">
      <li>
        {{ item.id }} || {{ item.todo }}
        <a :href="'#/details/' + item.id">detay</a>
        <button @click="todo">yapıldı</button>
        <a :href="'#/details/' + item.id">sil</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      datas: "ı am data",
      datas2: [
        { id: 1, todo: "deneme1", type: "iş", weight: 10 },
        { id: 2, todo: "deneme2", type: "Ödemeler", weight: 8 },
        { id: 3, todo: "deneme2", type: "Ödemeler", weight: 4 },
        { id: 4, todo: "deneme2", type: "Ödemeler", weight: 3 },
        { id: 5, todo: "deneme2", type: "Ödemeler", weight: 2 },
        { id: 6, todo: "deneme2", type: "Ödemeler", weight: 1 },
        { id: 7, todo: "deneme2", type: "Ödemeler", weight: 10 },
      ],
    };
  },
  methods: {
    todo() {
      console.log("yapıldı!!!!");
    },
  },
};
</script>
