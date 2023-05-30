<template>
  <label class="text-field__wrapper">
    <div class="text-field__caption">{{ caption }}</div>
    <input
      :value="value"
      class="text-field__input"
      :type="fieldType"
      @input="handleInput"
      required
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
    number: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;

      this.$emit("update:modelValue", value);
      this.$emit("onValueUpdate", value);
    },
  },
  computed: {
    fieldType() {
      return this.number ? "number" : "text";
    },
  },
};
</script>

<style scoped src="./TextField.css"></style>
