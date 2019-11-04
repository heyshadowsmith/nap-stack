<template>
  <a :href="href" class="text-white font-bold py-2 px-4 rounded-full inline-block">
    <slot />
  </a>
</template>
<script>
export default {
  name: "Button",
  props: {
    href: {
      type: String,
      default: "#"
    }
  }
};
</script>