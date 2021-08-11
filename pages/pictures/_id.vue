<template>
  <div>
    <GoBack />
    <h1 class="text-center">
      Pictures in Album {{ $route.params.picture.albumId }}
    </h1>
    <br>
    <v-row>
      <div v-for="photo in eachAlbum" :key="photo.id" class="card picture col-4">
        <v-card outlined class="pt-2 pb-2">
          <div class="card-body">
            <h5 class="card-title text-center">
              {{ photo.title }}
            </h5>
            <div class="card-text text-center">
              <img :src="photo.thumbnailUrl">
            </div>
          </div>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack'
import { mapState } from 'vuex'

export default {
  name: 'Album',
  components: {
    GoBack
  },
  computed: {
    ...mapState(['pictures']),
    eachAlbum () {
      let album = this.pictures
      album = album.filter(
        picture => picture.albumId === this.$route.params.picture.albumId
      )
      return album
    }
  }
}
</script>
