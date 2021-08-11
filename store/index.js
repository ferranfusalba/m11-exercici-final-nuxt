export const state = () => ({
  users: [],
  pictures: [],
  input: ''
})

export const getters = {
  users (state) {
    return state.users
  },
  getUser (state) {
    return state.users.filter(user => user.name.toLowerCase().includes(state.input.toLowerCase()))
  },
  usersConsulted (state) {
    return state.users.filter(user => user.counter > 0)
  },
  pictures (state) {
    return state.pictures
  },
  albumsConsulted (state) {
    return state.pictures.filter(album => album.counter > 0)
  },
  getInput (state) {
    return state.input
  },
  getUsernames (state) {
    return state.users.map(user => user.name)
  }
}

export const mutations = {
  addInput (state, input2) {
    state.input = input2
  },
  removeInput (state) {
    state.input = ''
  },
  increment (state, selection) {
    selection.counter++
    state.input = ''
  },
  setUsers (state, users) {
    if (state.users.length === 0) {
      state.users = users
      state.users.counter = 0
    }
  },
  setPictures (state, pictures) {
    if (state.pictures.length === 0) {
      state.pictures = pictures
      state.pictures.counter = 0
    }
  }
}

export const actions = {

  async getUsers ({ commit }) {
    const response = await this.$axios.$get('http://jsonplaceholder.typicode.com/users')
    response.forEach(item => item.counter = 0)
    commit('setUsers', response)
  },
  async getPictures ({ commit }) {
    const response = await this.$axios.$get('http://jsonplaceholder.typicode.com/photos')
    response.forEach(item => item.counter = 0)
    commit('setPictures', response)
  }
}
