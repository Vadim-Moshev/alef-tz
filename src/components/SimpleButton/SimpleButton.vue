<template>
  <input type="button" :value="caption" />
</template>

<script>
export default {
  name: "SimpleButton",
  props: {
    caption: {
      type: String,
      required: true,
    },
  },
};
</script>
