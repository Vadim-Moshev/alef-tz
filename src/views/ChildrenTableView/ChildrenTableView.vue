<template>
  <div v-if="aboutUser === ''">
    Пользователь не предоставил информацию о себе.
  </div>
  <template v-else>
    <section class="children-table-view__section">
      <ViewHeader>Персональные данные</ViewHeader>
      <div class="children-table-view__user-data">{{ aboutUser }}</div>
    </section>
    <div v-if="userData.children.length === 0">
      Пользователь не предоставил информацию о детях.
    </div>
    <section v-else class="children-table-view__section">
      <ViewHeader>Дети</ViewHeader>
      <ul class="children-table-view__children-list">
        <li
          v-for="(child, idx) in children"
          :key="idx"
          class="children-table-view__child-item"
        >
          {{ child }}
        </li>
      </ul>
    </section>
  </template>
</template>

<script>
import ViewHeader from "@/components/ViewHeader/ViewHeader";
import inclineYears from "@/utils/inclineYears.js";

export default {
  name: "ChildrenTableView",
  props: {
    userData: Object,
  },
  components: {
    ViewHeader,
  },
  data() {
    return {
      aboutUser: "",
      children: [],
    };
  },
  created() {
    const { userName, userAge } = this.userData;
    if (userName === "") {
      return;
    }

    const age = Number(userAge);
    this.aboutUser = `${userName} (${inclineYears(age)})`;

    this.children = this.userData.children.map((child) => {
      const age = Number(child.age);

      return `${child.name} (${inclineYears(age)})`;
    });
  },
};
</script>

<style scoped src="./ChildrenTableView.css"></style>
