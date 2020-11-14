<template>
  <div :style="{ width: perent + '%' }" data-testid="hello">
    hello world{{ perent }}
    <button @click="handleClick">click</button>
    <button @click="handleSave">save</button>
    <button @click="globalProperty" data-testid="globalProperty">fetch</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    globalProperty() {
      this.$http("123");
    },
  },
  setup() {
    // 对外的接口
    const HandleClick = () => {
      return "hello world";
    };

    let perent = ref(0);
    let intervalId;
    const start = () => {
      intervalId = setInterval(() => {
        perent.value++;
      }, 100);
    };

    const close = () => {
      clearInterval(intervalId);
    };

    // const logHello = ()=>{
    //   setTimeout(() => {
    //     return
    //   }, 1000);
    // }

    return {
      close,
      start,
      perent,
      HandleClick,
    };
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
