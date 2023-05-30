<template>
  <div v-if="userData.userName === ''">
    Пользователь не предоставил информацию о себе.
  </div>
  <template v-else>
    <section class="children-table-view__section">
      <ViewHeader>Персональные данные</ViewHeader>
      <div class="children-table-view__user-data">{{ userDataString }}</div>
    </section>
    <div v-if="userData.children.length === 0">
      Пользователь не предоставил информацию о детях.
    </div>
    <section v-else class="children-table-view__section">
      <ViewHeader>Дети</ViewHeader>
      <ul class="children-table-view__children-list">
        <li class="children-table-view__child-item">Пётр, 10 лет</li>
        <li class="children-table-view__child-item">Пётр, 10 лет</li>
      </ul>
    </section>
  </template>
</template>

<script>
import ViewHeader from "@/components/ViewHeader/ViewHeader";

export default {
  name: "ChildrenTableView",
  props: {
    userData: Object,
  },
  components: {
    ViewHeader,
  },
  computed: {
    userDataString() {
      const { userName, userAge } = this.userData;
      return `${userName}, ${userAge} лет.`;
    },
  },
};
</script>

<style scoped src="./ChildrenTableView.css"></style>
