<template>
  <div class="SInput w-full">
    <label v-if="label !== ''" class="text-black font-medium mb-2 block">{{ label }}</label>
    <input
      class="border border-gray-300 rounded-lg w-full p-3 leading-tight"
      v-model="data"
      @input="updateInput"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "SInput",
  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      data: this.value
    };
  },
  methods: {
    updateInput() {
      this.$emit("input", this.data);
    }
  }
};
</script>