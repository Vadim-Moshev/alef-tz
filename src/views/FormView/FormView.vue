<template>
  <form class="form-view">
    <section class="form-view_section">
      <ViewHeader class="form-view__header">Персональные данные</ViewHeader>
      <TextField caption="Имя" />
      <TextField caption="Возраст" />
    </section>
    <section class="form-view_section">
      <div class="children-control-panel">
        <ViewHeader class="form-view__header">Дети (макс. 5)</ViewHeader>
        <div>кнопк0</div>
      </div>
    </section>
    <SimpleButton class="form-view__save-button" caption="Сохранить" />
  </form>
</template>

<script>
import ViewHeader from "@/components/ViewHeader/ViewHeader";
import TextField from "@/components/TextField/TextField";
import SimpleButton from "@/components/SimpleButton/SimpleButton";

export default {
  name: "FormView",
  components: {
    ViewHeader,
    TextField,
    SimpleButton,
  },
};
</script>

<style scoped src="./FormView.css"></style>
