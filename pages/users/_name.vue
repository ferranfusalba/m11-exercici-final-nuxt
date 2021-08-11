<template>
  <div>
    <GoBack />
    <div class="card text-center d-flex justify-center">
      <div class="card-body">
        <h1 class="card-title">
          {{ $route.params.user.name }}
        </h1>
        <div class="card-text">
          <br>
          <div v-for="user in users" :key="user.name" class="card user">
            <div v-if="user.name == $route.params.user.name">
              <v-card outlined class="pt-2 pb-2 pl-4 pr-4">
                <div class="card-body">
                  <h5 class="card-title text-center">
                    {{ user.name }}
                  </h5>
                  <NuxtLink
                    :to="{
                      name: 'users-id',
                      params: { id: user.id, user: user },
                    }"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'User',
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
