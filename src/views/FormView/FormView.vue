<template>
  <form class="form-view" @submit.prevent="saveData">
    <section class="form-view_section">
      <ViewHeader class="form-view__header">Персональные данные</ViewHeader>
      <TextField caption="Имя" v-model="userName" :value="userName" />
      <TextField
        caption="Возраст"
        v-model="userAge"
        :value="userAge"
        :number="true"
      />
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
        <ChildBlock
          v-for="child in children"
          :key="child.index"
          :childIndex="child.index"
          @removeChild="removeChild"
          :name="child.name"
          :age="child.age"
          v-model:childName="child.name"
          v-model:childAge="child.age"
        />
      </div>
    </section>
    <button type="submit" class="form-view__save-button" @submit="saveData">
      Сохранить
    </button>
  </form>
</template>

<script>
import ViewHeader from "@/components/ViewHeader/ViewHeader";
import TextField from "@/components/TextField/TextField";
import ChildBlock from "@/components/ChildBlock/ChildBlock";

const MAX_CHILDREN_COUNT = 5;

export default {
  name: "FormView",
  emits: ["saveData"],
  props: {
    userData: Object,
  },
  components: {
    ViewHeader,
    TextField,
    ChildBlock,
  },
  data() {
    return {
      userName: "",
      userAge: "",
      children: [],
      childrenCount: 0,
    };
  },
  created() {
    this.userName = this.userData.userName;
    this.userAge = this.userData.userAge;
    this.children = this.userData.children;
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

      const index = Date.now().toString();
      const newChild = { name: "", age: "", index };

      this.children.push(newChild);
      this.childrenCount++;
    },
    removeChild(childIndex) {
      const indexToRemove = this.children.findIndex(
        (child) => child.index === childIndex
      );

      // alert()

      this.children.splice(indexToRemove, 1);
      this.childrenCount--;
    },
    saveData() {
      const payload = {
        userName: this.userName,
        userAge: this.userAge,
        children: this.children,
      };

      this.$emit("saveData", payload);
      this.$router.push("/preview");
    },
  },
};
</script>

<style scoped src="./FormView.css"></style>
