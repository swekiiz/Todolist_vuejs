<template>
  <ul>
    <li v-for="item in $store.state.list" :key="item">
      <div id="item">
        <p>{{item}}</p>
        <button v-if="$store.state.isDeleteVisible" id="delbtn" @click="deleteSelf(item)">
          <div id="pos">-</div>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "todoList",
  data() {
    return {};
  },
  methods: {
    deleteSelf(value) {
      this.$store.dispatch("DELLIST", { text: value });
    },
  },
};
</script>

<style scope>
ul {
  padding: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
li {
  list-style-type: none;
}
#item {
  margin: 32px 0 0 0;
  border-radius: 10px;
  padding: 10px 32px 10px 24px;
  height: auto;
  font-size: 1.8em;
  font-weight: 500;
  width: 1000px;
  text-align: left;
  color: white;
  background-color: #233141;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
#item:hover {
  background-color: #2c3e50;
}
p {
  flex-grow: 2;
}
#delbtn {
  background-color: red;
  border-radius: 100px;
  color: white;
  text-align: center;
  text-justify: center;
  font-size: 40px;
  height: 24px;
  width: 24px;
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
}
#pos {
  position: absolute;
  top: -13.6px;
  right: 5.4px;
}
</style>