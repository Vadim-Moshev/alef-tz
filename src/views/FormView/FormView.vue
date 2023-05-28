<template>
  <form class="form-view">
    <ViewHeader class="form-view__header">Персональные данные</ViewHeader>
    <TextField />
  </form>
</template>

<script>
import ViewHeader from "@/components/ViewHeader/ViewHeader";
import TextField from "@/components/TextField/TextField";

export default {
  name: "FormView",
  components: {
    ViewHeader,
    TextField,
  },
};
</script>

<style scoped src="./FormView.css"></style>
