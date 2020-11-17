<template>
  <!-- 반복되는 부모요소에 v-row와 같은 속성 -->
  <v-row 
      v-masonry
      intem-selector=".item"
      >
      <!-- 반복되어지는 요소들에 v-masonry-title 및 class=item이라고 명시 -->
      <v-col 
        v-for="movie in movies"
        :key="movie.imdbID"
        v-masonry-title
        class="item"
        cols="12"
        lg="3"
        md="3"
        sm="6">
        <template>
            <v-card
              class="mx-auto"
              max-width="400"
            >
              <v-img
                class="white--text align-end"
                :height="posterHeight(movie.Poster)"
                :src="posterSrc(movie.Poster)"
                :alt="movie.Title">
                <template v-slot:placeholder>
                  <div style="background:lightgray; height:100%;"></div>
                </template>
              </v-img>

              <v-card-subtitle class="pb-0">
                {{movie.Year}}
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{movie.Title}}</div>
              </v-card-text>
            </v-card>
          </template>
      </v-col>
    </v-row>
</template>

<script>
export default {
  computed: {
    movies(){
      return this.$store.state.movie.movies
    }
  },
  methods: {
    posterSrc (poster){
      return poster === 'N/A' ? '' : poster 
    },
    posterHeight (poster){
      return poster === 'N/A' ? 100 : 300
    }
  }
}
</script>

<style>

</style>