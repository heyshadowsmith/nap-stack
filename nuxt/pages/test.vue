<template>
  <div class="container">
    <div v-for="(user, index) in users" :key="index">
      <p>
        <strong>User ID:</strong>
        {{ user.id }}
      </p>
      <p>
        <strong>User's Name:</strong>
        {{ user.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";
import GET_USERS from "../queries/users";

export default {
  data() {
    return {
      signedIn: false,
      users: []
    };
  },
  apollo: {
    users: {
      query: GET_USERS
    }
  },
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
        console.log(user);
      } catch (err) {
        this.signedIn = false;
      }
    }
  },
  created() {
    this.findUser();

    AmplifyEventBus.$on("authState", info => {
      if (info === "signedIn") {
        this.findUser();
      } else {
        this.signedIn = false;
      }
    });
  }
};
</script>
