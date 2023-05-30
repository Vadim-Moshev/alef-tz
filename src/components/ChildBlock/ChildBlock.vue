<template>
  <div class="child-block">
    <TextField
      class="child-block__text-field"
      caption="Имя"
      :value="name"
      v-model="childName"
    />
    <TextField
      class="child-block__text-field"
      caption="Возраст"
      :number="true"
      :value="age"
      v-model="childAge"
    />
    <button
      class="child-block__button"
      type="button"
      @click="handleChildRemoving"
    >
      Удалить
    </button>
  </div>
</template>

<script>
import TextField from "@/components/TextField/TextField";

export default {
  name: "ChildBlock",
  emits: ["update:childName", "update:childAge", "removeChild"],
  components: {
    TextField,
  },
  props: {
    childIndex: String,
    name: String,
    age: String,
  },
  data() {
    return {
      childName: "",
      childAge: "",
    };
  },
  methods: {
    handleChildRemoving() {
      this.$emit("removeChild", this.childIndex);
    },
  },
  watch: {
    childName(newValue) {
      this.$emit("update:childName", newValue);
    },
    childAge(newValue) {
      this.$emit("update:childAge", newValue);
    },
  },
};
</script>

<style scoped src="./ChildBlock.css"></style>
