<template>
  <div class="w-full max-w-xl bg-white shadow-md rounded-lg p-8">
    <div v-if="!confirmation">
      <h2 class="text-blue-800 text-2xl mb-12 font-bold text-center">Create an Account</h2>
      <form>
        <div class="mb-6">
          <label class="text-black font-medium mb-2 block">Email</label>
          <input
            v-model="email"
            class="border border-gray-300 rounded-lg w-full p-3 leading-tight"
            placeholder="john@exampleinc.com"
            type="email"
          />
        </div>
        <div class="mb-12">
          <label class="text-black font-medium mb-2 block">Password</label>
          <input
            v-model="password"
            class="border border-gray-300 rounded-lg w-full p-3 leading-tight"
            placeholder="Password must have at least 8 characters"
            type="password"
          />
        </div>
        <button
          class="w-full bg-blue-600 text-white py-3 rounded-lg mb-4"
          type="submit"
          @click.prevent="createAccount"
        >Create Account</button>
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
        <div class="mb-12">
          <label class="text-black font-medium mb-2 block">Confirmation Code</label>
          <input
            v-model="code"
            class="border border-gray-300 rounded-lg w-full p-3 leading-tight"
            type="text"
          />
        </div>
        <button
          class="w-full bg-blue-600 text-white py-3 rounded-lg mb-4"
          type="submit"
          @click.prevent="confirmEmail"
        >Confirm Email</button>
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
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";
import CREATE_USER from "../mutations/createUser";

export default {
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