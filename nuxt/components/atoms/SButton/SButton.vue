<template>
  <button
    :disabled="type === 'disabled'"
    class="SButton py-2 px-3 rounded-lg"
    :class="styles"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "SButton",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    display: {
      type: String,
      default: ""
    }
  },
  computed: {
    styles() {
      return {
        "bg-blue-600": this.type === "primary",
        "text-white": this.type === "primary",
        "bg-gray-300": this.type === "disabled",
        "text-gray-600": this.type === "disabled",
        "cursor-default": this.type === "disabled",
        "w-full": this.display === "block"
      };
    }
  }
};
</script>