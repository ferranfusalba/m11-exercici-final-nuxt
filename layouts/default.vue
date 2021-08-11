<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title>
        <img src="@/assets/logoit.png" alt="Logo IT" height="40px" class="mt-2">
      </v-toolbar-title>
      <v-spacer />
      <v-spacer />
      <v-row>
        <v-card
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item>
            <v-list-item-content>
              <div>
                <v-list-item-title v-text="item.title" />
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-row>
      <v-spacer />
      <SearchPart />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <div class="p-2 bd-highlight">
        <a href="https://github.com/ferranfusalba" class="text-light">Ferran Fusalba Roselló</a>
      </div>
      <v-spacer />
      <div class="p-2 bd-highlight">
        <a href="https://github.com/ferranfusalba?tab=repositories" class="text-light">Projecte Fi de Curs de VueJS (amb Nuxt.js i Vuetify)</a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SearchPart from '../components/Search.vue'

export default {
  name: 'Search',
  components: {
    SearchPart
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Users',
          to: '/users'
        },
        {
          title: 'Pictures',
          to: '/pictures'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'IT Academy',
      title1: 'Home',
      title2: 'Users',
      title3: 'Pictures'
    }
  },
  computed: {
    ...mapGetters(['users']),
    ...mapState(['users'])
  },
  mounted () {
    this.$store.dispatch('getUsers')
  }
}
</script>

<style scoped>
.text-light {
  text-decoration: none;
  color: white;
}
</style>
