<template>
  <div class="chat container">
    <h2>This is Chat page</h2>
    <p class="teal-text" v-if="this.name">{{ this.name }}</p>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ["name"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
