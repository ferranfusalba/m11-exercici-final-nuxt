<template>
  <span>
    <v-btn @click="goBack">Go Back</v-btn>
  </span>
</template>

<script>
export default {
  methods: {
    goBack () {
      return this.$router.go(-1)
    }
  }
}
</script>
