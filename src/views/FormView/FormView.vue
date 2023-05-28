<template>
  <form class="form-view">
    <ViewHeader class="form-view__header">Персональные данные</ViewHeader>
  </form>
</template>

<script>
import ViewHeader from "@/components/ViewHeader/ViewHeader";

export default {
  name: "FormView",
  components: {
    ViewHeader,
  },
};
</script>

<style scoped src="./FormView.css"></style>
