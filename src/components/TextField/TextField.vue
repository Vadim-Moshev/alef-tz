<template>
  <label class="text-field__wrapper">
    <div class="text-field__caption">{{ caption }}</div>
    <input class="text-field__input" type="text" @input="handleInput" />
  </label>
</template>

<script>
export default {
  name: "TextField",
  emits: ["update:modelValue"],
  props: {
    caption: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;

      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped src="./TextField.css"></style>
