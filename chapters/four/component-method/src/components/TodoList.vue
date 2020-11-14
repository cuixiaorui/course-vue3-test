<template>
  <div>
    <ul>
      <li data-testid="li" v-for="item in itemList" :key="item.id">
        {{ item.name }}
      </li>
      {{
        itemList
      }}
    </ul>
  </div>
</template>

<script>
import { axios } from "../http.js";
import { reactive, watchEffect } from "vue";
export default {
  setup() {
    // 请求数据
    // let itemList = reactive([]);

    // watchEffect(() => {
    //   // url
    //   console.log("watchEffect");
    //   axios("http://www.baidu.com").then((res) => {
    //     console.log(res);
    //     itemList = res.data;
    //     console.log(itemList);
    //   });
    // });
    // let itemList = [1, 2, 3];

    let itemList ;
    axios().then((res) => {
      itemList = res.data;
      console.log(itemList)
    });

    return {
      itemList,
    };
  },
};
</script>

<style></style>
