<template>
  <label>
    {{ label }}
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "CustomInput",

  props: ["modelValue", "label"],
};
</script>

// 使用方式
// <custom-input v-model="input" label="Text Input" class="text-input"/>
