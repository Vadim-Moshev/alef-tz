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
        <button
          type="button"
          class="form-view__add-child-button"
          v-if="!childrenCountLimitReached"
          @click="addChild"
        >
          <img :src="cross" alt="" />
          <span>Добавить ребёнка</span>
        </button>
      </div>
      <div v-if="children.length > 0" class="child-blocks-container">
        <ChildBlock v-for="(child, idx) in children" :key="idx" />
      </div>
    </section>
    <button type="button" class="form-view__save-button">Сохранить</button>
  </form>
</template>

<script>
import ViewHeader from "@/components/ViewHeader/ViewHeader";
import TextField from "@/components/TextField/TextField";
import ChildBlock from "@/components/ChildBlock/ChildBlock";

const MAX_CHILDREN_COUNT = 5;

export default {
  name: "FormView",
  components: {
    ViewHeader,
    TextField,
    ChildBlock,
  },
  data() {
    return {
      children: [],
      childrenCount: 0,
    };
  },
  computed: {
    cross() {
      return require("@/assets/cross.svg");
    },
    childrenCountLimitReached() {
      return this.childrenCount === MAX_CHILDREN_COUNT;
    },
  },
  methods: {
    addChild() {
      if (this.childrenCount === MAX_CHILDREN_COUNT) {
        return;
      }

      const newChild = { name: "", age: 0 };
      this.children.push(newChild);
      this.childrenCount++;
    },
  },
};
</script>

<style scoped src="./FormView.css"></style>
