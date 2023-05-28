<template>
  <label class="text-field__wrapper">
    <div class="text-field__caption">{{ caption }}</div>
    <input class="text-field__input" type="text" />
  </label>
</template>

<script>
export default {
  name: "TextField",
  props: {
    caption: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped src="./TextField.css"></style>
