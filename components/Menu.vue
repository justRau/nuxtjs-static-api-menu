<template>
  <div class="flex justify-center text-xl py-4">
    <div v-for="item in items">
      <span class="mx-3">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Menu",

    data: function () {
      return {
        items: [],
      };
    },

    created() {
      this.items = this.$store.state.menuItems;
    },
  };
</script>
