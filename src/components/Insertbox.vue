<template>
  <form @submit="addList">
    <div id="form">
      <input type="text" v-model="inputText" name="inputText" placeholder="Insert list" id="input" />
      <input type="submit" value="+" id="button" />
      <button @click="onClickDelete" id="button">-</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "insertBox",
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    addList(e) {
      e.preventDefault();
      if (this.inputText != "") {
        this.$store.dispatch("ADDLIST", { text: this.inputText });
        this.inputText = "";
      }
    },
    onClickDelete(e) {
      e.preventDefault();
      this.$store.dispatch("SWAPVISIBLE");
    },
  },
};
</script>

<style scope>
::placeholder {
  color: #576c81b6;
}
#form {
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  justify-content: center;
}

#input {
  border-radius: 10px;
  width: 600px;
  height: auto;
  padding: 0 20px;
  font-size: 2em;
  color: white;
  background-color: #233141;
}
#input:hover,
#button:hover {
  background-color: #2c3e50;
}
#input:focus {
  border: 1px solid #42b983;
  outline: none;
}
#button:focus {
  border: 0.5px solid #42b98359;
  outline: none;
}
#button {
  border-radius: 10px;
  margin: 0 0 0 10px;
  font-size: 2em;
  height: auto;
  width: 100px;
  color: #58fab1;
  background-color: #233141;
}
</style>