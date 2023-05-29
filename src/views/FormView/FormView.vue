<template>
  <form class="form-view">
    <section class="form-view_section">
      <ViewHeader class="form-view__header">Персональные данные</ViewHeader>
      <TextField caption="Имя" />
      <TextField caption="Возраст" />
    </section>
    <section class="form-view_section">
      <div class="children-control-panel">
        <ViewHeader>Дети (макс. 5)</ViewHeader>
        <button type="button" class="form-view__add-child-button">
          <img :src="cross" alt="" />
          <span>Добавить ребёнка</span>
        </button>
      </div>
      <div class="child-blocks-container">
        <ChildBlock />
      </div>
    </section>
    <button type="button" class="form-view__save-button">Сохранить</button>
  </form>
</template>

<script>
import ViewHeader from "@/components/ViewHeader/ViewHeader";
import TextField from "@/components/TextField/TextField";
import ChildBlock from "@/components/ChildBlock/ChildBlock";

export default {
  name: "FormView",
  components: {
    ViewHeader,
    TextField,
    ChildBlock,
  },
  computed: {
    cross() {
      return require("@/assets/cross.svg");
    },
  },
};
</script>

<style scoped src="./FormView.css"></style>
