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
                height="200px"
                :src="movie.Poster"
                :alt="movie.Title"
              >
                <v-card-title></v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">
                {{movie.Year}}
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{movie.Title}}</div>

                <div>movie contents</div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="orange"
                  text
                >
                  Share
                </v-btn>

                <v-btn
                  color="orange"
                  text
                >
                  Explore
                </v-btn>
              </v-card-actions>
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
  }
}
</script>

<style>

</style>