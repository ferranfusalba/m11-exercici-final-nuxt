<template>
  <div>
    <v-autocomplete
      v-model="selectUser"
      :loading="loading"
      :items="getUsernames"
      :search-input.sync="searchInput"
      cache-items
      class="mx-2"
      flat
      hide-no-data
      hide-details
      label="Cerca un usuari"
      solo-inverted
    />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      loading: false,
      selectUser: null,
      searchInput: ''
    }
  },
  computed: {
    ...mapGetters(['getUsernames', 'users']),
    ...mapState(['users'])
  },
  watch: {
    searchInput (value) {
      value && value !== this.selectUser && this.querySelections(value)
      if (value) {
        const user = this.users.filter(user => user.name === (value))
        this.$router.push({ name: 'users-name', params: { name: `${value}`, user: user[0] } })
      } else if (value !== this.selectUser) {
        this.$router.push({ name: 'NotFound' })
      }
    }
  }
}
</script>
