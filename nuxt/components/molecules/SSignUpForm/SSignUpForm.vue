<template>
  <SCard>
    <div v-if="!confirmation">
      <h2 class="text-blue-800 text-2xl mb-12 font-bold text-center">Create an Account</h2>
      <form>
        <SInput
          class="mb-6"
          v-model="email"
          type="email"
          label="Email"
          placeholder="john@exampleinc.com"
        />
        <SPasswordInput
          class="mb-12"
          v-model="password"
          label="Password"
          placeholder="Password must have at least 8 characters"
        />
        <SButton class="mb-4" display="block" @click.prevent="createAccount">Create Account</SButton>
        <p class="text-center text-gray-500">
          Already have an account?
          <router-link class="text-blue-600" to="/signin">Sign in</router-link>
        </p>
      </form>
    </div>
    <div v-else>
      <h2 class="text-blue-800 text-2xl font-bold text-center">Confirm your email</h2>
      <p class="text-gray-500 mb-12 text-center">Enter your confirmation code to continue</p>
      <form>
        <SInput class="mb-12" v-model="code" label="Confirmation Code" />
        <SButton class="mb-4" display="block" @click.prevent="confirmEmail">Confirm Email</SButton>
        <p class="text-center text-gray-500">
          Didn't get the confirmation email?
          <a
            href="#"
            class="text-blue-600"
            @click.prevent="resendConfirmationEmail"
          >Resend it</a>
        </p>
      </form>
    </div>
  </SCard>
</template>

<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";
import SCard from "../../atoms/SCard/SCard";
import SInput from "../../atoms/SInput/SInput";
import SPasswordInput from "../../atoms/SPasswordInput/SPasswordInput";
import SButton from "../../atoms/SButton/SButton";
import CREATE_USER from "../../../mutations/createUser";

export default {
  name: "SSignUpForm",
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
      code: "",
      cognitoData: "",
      confirmation: false
    };
  },
  methods: {
    createAccount() {
      Auth.signUp({
        username: this.email,
        password: this.password
      })
        .then(data => {
          this.confirmation = true;
          this.cognitoData = data;
        })
        .catch(err => console.log(err));
    },
    confirmEmail() {
      Auth.confirmSignUp(this.email, this.code, {
        forceAliasCreation: true
      })
        .then(() => {
          this.$apollo.mutate({
            mutation: CREATE_USER,
            variables: {
              name: this.cognitoData.user.username
            }
          });
          this.cognitoData = "";
          this.$router.push({ path: "/users" });
        })
        .catch(err => console.log(err));
    },
    resendConfirmationEmail() {
      Auth.resendSignUp(this.email)
        .then(() => {
          console.log("Code resent successfully");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>