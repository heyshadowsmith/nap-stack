<template>
  <SCard>
    <h2 class="text-blue-800 text-2xl mb-12 font-bold text-center">Sign In</h2>
    <form>
      <SInput class="mb-6" v-model="email" type="email" label="Email" placeholder="Enter email" />
      <SPasswordInput
        v-model="password"
        label="Password"
        placeholder="Password must have at least 8 characters"
      />
      <div class="mb-12 flex justify-end">
        <router-link class="text-blue-600" to="/password-reset">Forgot password?</router-link>
      </div>
      <SButton class="mb-4" display="block" @click.prevent="signIn">Sign In</SButton>
      <p class="text-center text-gray-500">
        Don't have an account?
        <router-link class="text-blue-600" to="/signup">Create an account</router-link>
      </p>
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
  name: "SSignInForm",
  components: {
    SCard,
    SInput,
    SPasswordInput,
    SButton
  },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    signIn() {
      Auth.signIn(this.email, this.password)
        .then(user => {
          this.$router.push({ path: "/users" });
          console.log(`Signed in under ${this.email}.`);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>