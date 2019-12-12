<template>
    <table>
        <thead>
            <tr>
                <th>The table of Movie</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="movie in movies">
                <td>{{ movie.name }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  name: 'MovieTable',
  data: () => ({
      movies: []
  }),
  methods: {
    addMovie: function (event) {
      this.movies.push(event.detail.movie);
    }
  },
  created() {
    window.addEventListener('movieStockApp::addMovie', this.addMovie)
  },
  destroyed() {
    window.removeEventListener('movieStockApp::addMovie', this.addMovie)
  }
}
</script>

<style>
table,
td {
    border: 1px solid #333;
}

thead,
tfoot {
    background-color: #333;
    color: #fff;
}
</style>
