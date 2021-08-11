<template>
  <div>
    <GoBack />
    <h1 class="text-center">
      Albums
    </h1>
    <br>
    <v-row>
      <div
        v-for="picture in albumsFinal"
        :key="picture.id"
        class="card picture col-4"
      >
        <v-card outlined class="pt-2 pb-2">
          <div class="card-body">
            <h5 class="card-title text-center">
              {{ picture.albumId }}
            </h5>
            <NuxtLink
              :to="{
                name: 'pictures-id',
                params: { id: picture.albumId, picture: picture },
              }"
            >
              <div class="text-center">
                <v-btn
                  color="warning"
                  class="black--text"
                  @click="$store.commit('increment', picture)"
                >
                  Accedir a l'àlbum
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
    ...mapGetters(['pictures']),
    ...mapState(['pictures']),
    albumsFinal () {
      let albums = this.pictures
      albums = albums.reduce((acc, album) => {
        return { ...acc, [album.albumId]: album }
      }, {})
      return albums
    }
  },
  mounted () {
    this.$store.dispatch('getPictures')
  },
  methods: {
    ...mapMutations(['increment'])
  }
}
</script>

<style scoped>
.black--text {
  text-decoration: none;
}
</style>
