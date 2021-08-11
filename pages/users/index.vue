<template>
  <div>
    <GoBack />
    <h1 class="text-center">
      Users
    </h1>
    <br>
    <v-row>
      <div v-for="user in users" :key="user.id" class="card user col-4">
        <v-card outlined class="pt-2 pb-2">
          <div class="card-body">
            <h5 class="card-title text-center">
              {{ user.name }}
            </h5>
            <NuxtLink
              :to="{ name: 'users-id', params: { id: user.id, user: user } }"
            >
              <div class="text-center">
                <v-btn
                  color="warning"
                  class="black--text"
                  dark
                  @click="$store.commit('increment', user)"
                >
                  Pàgina del client
                </v-btn>
              </div>
            </NuxtLink>
          </div>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    GoBack
  },
  filters: {
    UpperCase (value) {
      return value.toUpperCase()
    }
  },
  computed: {
    ...mapGetters(['users']),
    ...mapState(['users'])
  },
  mounted () {
    this.$store.dispatch('getUsers')
  },
  methods: {
    ...mapMutations(['increment'])
  }
}
</script>
