<template>
  <div>
    <GoBack />
    <div class="card text-center">
      <div class="card-body">
        <h1 class="card-title">
          {{ $route.params.user.name }}
        </h1>
        <div class="card-text">
          <br>
          <p><b>Username: </b>{{ $route.params.user.username }}</p>
          <p><b>Email: </b>{{ $route.params.user.email }}</p>
          <p><b>Phone: </b>{{ $route.params.user.phone }}</p>
          <p><b>Website: </b>{{ $route.params.user.website }}</p>
          <p><b>City: </b>{{ $route.params.user.address.city }}</p>
          <p><b>Company: </b>{{ $route.params.user.company.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack'
export default {
  name: 'User',
  components: {
    GoBack
  }
}
</script>
