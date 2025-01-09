<template>
  <br>
  <br>
  <div v-if="isUserLogged">
    user is logged
    {{ user }}
  </div>
  <div v-else>
    <button @click="handleLoginClick" class="btn btnPrimary">Login</button>
  </div>
  <br>
  <br>

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
  methods: {
    handleLoginClick() {
      this.$store.dispatch('setUser')
    }
  },
  computed: {
    isUserLogged() {
      return this.$store.getters.isUserLogged
    },
    user() {
      return this.$store.getters.getUser
    },
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