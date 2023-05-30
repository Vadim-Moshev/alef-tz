<template>
  <label class="text-field__wrapper">
    <div class="text-field__caption">{{ caption }}</div>
    <input
      :value="value"
      class="text-field__input"
      type="text"
      @input="handleInput"
    />
  </label>
</template>

<script>
export default {
  name: "TextField",
  emits: ["update:modelValue", "onValueUpdate"],
  props: {
    caption: {
      type: String,
      required: true,
    },
    value: String,
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;

      this.$emit("update:modelValue", value);
      this.$emit("onValueUpdate", value);
    },
  },
};
</script>

<style scoped src="./TextField.css"></style>
