<template>
  <v-row justify="center" align="center">
    <v-col justify="center" align="center">
      <v-row justify="center" align="center" class="mt-4">
        <v-card elevation="24" class="mr-2">
          <v-card-title>Users consulted</v-card-title>
          <v-card-text>
            <li v-for="user in usersConsulted" :key="user.id">
              {{ user.name }} - {{ user.counter }}
            </li>
          </v-card-text>
        </v-card>
        <v-card elevation="24" class="ml-2">
          <v-card-title>Pictures consulted</v-card-title>
          <v-card-text>
            <li v-for="picture in albumsConsulted" :key="picture.id">
              album id: {{ picture.albumId }} - {{ picture.counter }} times
            </li>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'usersConsulted',
    'albumsConsulted'
  ])
}
</script>
