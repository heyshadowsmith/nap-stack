<template>
  <SCard>
    <h2 class="text-blue-800 text-2xl font-bold text-center">Reset Your Password</h2>
    <p
      class="text-gray-500 mb-12 text-center"
    >Enter your password reset code and change your password</p>
    <form>
      <SInput class="mb-6" v-model="email" label="Email" placeholder="Enter email" type="email" />
      <SInput class="mb-6" v-model="code" label="Code" placeholder="Enter password reset code" />
      <SPasswordInput
        class="mb-12"
        v-model="newPassword"
        label="New Password"
        placeholder="Enter new password"
      />
      <SButton display="block" @click.prevent="changePassword">Change Password</SButton>
    </form>
  </SCard>
</template>

<script>
import { Auth } from "aws-amplify";
import SCard from "../../atoms/SCard/SCard";
import SInput from "../../atoms/SInput/SInput";
import SPasswordInput from "../../atoms/SPasswordInput/SPasswordInput";
import SButton from "../../atoms/SButton/SButton";

export default {
  name: "SPasswordChangeForm",
  components: {
    SCard,
    SInput,
    SPasswordInput,
    SButton
  },
  data() {
    return {
      email: "",
      code: "",
      newPassword: ""
    };
  },
  methods: {
    changePassword() {
      Auth.forgotPasswordSubmit(this.email, this.code, this.newPassword)
        .then(data => {
          console.log(`Password has been reset to ${this.newPassword}.`);
          this.$router.push({ path: "/signin" });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>