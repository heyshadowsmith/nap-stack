<template>
  <div class="w-full max-w-xl bg-white shadow-md rounded-lg p-8">
    <h2 class="text-blue-800 text-2xl mb-6 font-bold">Users in Database</h2>
    <div v-if="users.length === 0" class="mb-6">
      <p>You don't have any users in your database yet.</p>
    </div>
    <div v-else class="mb-6">
      <p v-for="(user, index) in users" :key="index">
        <strong>User's Name:</strong>
        {{ user.name }}
      </p>
    </div>
    <router-link class="bg-blue-600 text-white py-3 px-4 rounded-lg" to="/signup">Create a user</router-link>
    <p
      class="text-gray-500 text-xs mt-6"
    >All user names are going to be their email if you didn't change anything up to this point.</p>
  </div>
</template>

<script>
import GET_USERS from "../queries/users";

export default {
  data() {
    return {
      users: []
    };
  },
  apollo: {
    users: {
      query: GET_USERS
    }
  }
};
</script>
