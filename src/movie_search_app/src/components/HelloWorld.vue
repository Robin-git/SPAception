<template>
    <div>
      <h1>{{ msg }}</h1>
      <movie-table />
    </div>
</template>

<script>
import MovieTable from './MovieList.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    MovieTable
  }
}
</script>
