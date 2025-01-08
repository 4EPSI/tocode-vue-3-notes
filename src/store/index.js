import { createStore } from "vuex";

export const store = createStore({
  state: {
    users: [
      { id: 1, name: "John Doe", admin: true },
      { id: 2, name: "Jane Doe", admin: false },
      { id: 3, name: "Jim Doe", admin: false }
    ]
  },
  getters: {
    getAllUsers(state) {
      return state.users
    },
    getUsers(state) {
      return state.users.filter(user => !user.admin)
    },
    getUsersById: (state) => id => {
      return state.users.find(user => user.id === id)
    },
    getUsersLength(state, getters) {
      const suffix = 'number of users';
      return `${suffix} ${getters.getAllUsers.length}`
    }
  }
})