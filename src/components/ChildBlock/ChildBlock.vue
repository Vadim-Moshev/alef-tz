<template>
  <div class="child-block">
    <TextField class="child-block__text-field" caption="Имя" />
    <TextField class="child-block__text-field" caption="Возраст" />
    <button class="child-block__button" type="button">Удалить</button>
  </div>
</template>

<script>
import TextField from "@/components/TextField/TextField";

export default {
  name: "ChildBlock",
  components: {
    TextField,
  },
};
</script>

<style scoped src="./ChildBlock.css"></style>
