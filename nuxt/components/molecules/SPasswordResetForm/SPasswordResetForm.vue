<template>
  <SCard>
    <h2 class="text-blue-800 text-2xl font-bold text-center">Forgot Your Password?</h2>
    <p class="text-gray-500 mb-12 text-center">Send a password reset code to your email to continue</p>
    <form>
      <SInput class="mb-12" v-model="email" label="Email" placeholder="Enter email" type="email" />
      <SButton
        class="mb-4"
        display="block"
        @click.prevent="sendPasswordResetCode"
      >Send Password Reset Code</SButton>
      <p class="text-center text-gray-500">
        Remember your current password?
        <router-link class="text-blue-600" to="/signin">Go back to sign in</router-link>
      </p>
    </form>
  </SCard>
</template>

<script>
import { Auth } from "aws-amplify";
import SCard from "../../atoms/SCard/SCard";
import SInput from "../../atoms/SInput/SInput";
import SButton from "../../atoms/SButton/SButton";

export default {
  name: "SPasswordResetForm",
  components: {
    SCard,
    SInput,
    SButton
  },
  data() {
    return {
      email: ""
    };
  },
  methods: {
    sendPasswordResetCode() {
      Auth.forgotPassword(this.email)
        .then(data => {
          console.log(`Sending password reset code to ${this.email}...`);
          this.$router.push({ path: "/change-password" });
        })
        .catch(err => console.log(err));
    }
  }
};
</script>