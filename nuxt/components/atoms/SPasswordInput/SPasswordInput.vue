<template>
  <div class="SPasswordInput w-full">
    <label v-if="label !== ''" class="text-black font-medium mb-2 block">{{ label }}</label>
    <div class="inline-block relative w-full">
      <input
        class="border border-gray-300 rounded-lg w-full p-3 leading-tight"
        v-model="data"
        @input="updateInput"
        :placeholder="placeholder"
        :type="inputType"
      />
      <a
        href="#"
        class="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
        @click.prevent="togglePassword"
      >{{ passwordToggleText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "SPasswordInput",
  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      inputType: "password",
      passwordToggleText: "Show",
      data: this.value
    };
  },
  methods: {
    togglePassword() {
      if (this.inputType === "password") {
        this.inputType = "text";
        this.passwordToggleText = "Hide";
      } else {
        this.inputType = "password";
        this.passwordToggleText = "Show";
      }
    },
    updateInput() {
      this.$emit("input", this.data);
    }
  }
};
</script>