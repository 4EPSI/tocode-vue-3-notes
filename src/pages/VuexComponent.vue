<template>
    <ul style="margin-bottom: 25px;">
      <li v-for="user in getUsers" :key="user.id">
        <p>{{ user.id }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.admin ? 'admin' : 'user' }}</p>
      </li>
    </ul>

    <input v-model="userId" type="number">
    <p style="margin-top: 25px; margin-bottom: 25px; color: red;">{{ getUser }}</p>
    <p style="color: blue;">number of users {{ getUsersLength }}</p>
</template>

<script>
export default {
  data() {
    return {
      userId: 2
    }
  },
  computed: {
    getUser() {
      return this.$store.getters.getUsersById(this.userId) || 'not found'
    },
    getUsers() {
      return this.$store.getters.getUsers
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength
    }
  }
}
</script>