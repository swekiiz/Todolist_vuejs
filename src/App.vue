<template>
  <div id="app">
    <h1 id="head" style="color:#42b983">Todo List</h1>
    <Insertbox />
    <div id="hr-wrapper">
      <hr id="hr" />
    </div>
    <h1 v-if="$store.state.list.length == 0" id="NoListText">No Todolist</h1>
    <Todolist />
  </div>
</template>
<script>
import Insertbox from "./components/Insertbox.vue";
import Todolist from "./components/Todolist.vue";

export default {
  name: "App",
  components: {
    Insertbox,
    Todolist,
  },
};
</script>
<style>
* {
  border: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  background-color: #12202e;
}
#app #head {
  font-size: 72px;
  margin: 0 0 12px 0;
  letter-spacing: 2px;
}
#NoListText {
  margin-top: 82px;
  font-size: 3em;
  color: rgba(255, 255, 255, 0.075);
}
#hr-wrapper {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
}
#hr {
  border-top: 2px solid #42b9834b;
  width: 84vw;
}
</style>
