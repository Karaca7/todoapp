<template>
  <div id="tempcontainer">
    <div id="nav">
      <router-link to="/">Add Todo</router-link> |
      <router-link to="/todolist">Todo List</router-link> |
      <router-link to="/findtodo">Find Todo</router-link>

      <router-view />
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(255, 39, 104);
}

#tempcontainer {
  height: 100%;
}
</style>
