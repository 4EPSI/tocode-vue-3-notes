import { createStore } from "vuex";

export const store = createStore({
  state: {
    user: null,
    users: [
      { id: 1, name: "John Doe", admin: true },
      { id: 2, name: "Jane Doe", admin: false },
      { id: 3, name: "Jim Doe", admin: false }
    ]
  },
  mutations:{
    setUser(state, payload) {
      console.log('called mut setUser', state);
      console.log(payload);
      state.user = payload
    }
  },
  actions: {
    setUser({ commit}) {
      setTimeout(() => {
        const fakeUser = {
          id: 1,
          name: 'John Doe',
          admin: false
        }
        commit('setUser', fakeUser)
      }, 1000)
    }
  },
  getters: {
    isUserLogged(state) {
      return state.user ? true : false
    },
    getUser(state) {
      return state.user
    },
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