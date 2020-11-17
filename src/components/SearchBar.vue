<template>
  <div>
      <v-text-field
        v-model="title"
        outlined
        @keypress.enter = "searchMovies" >
        <template v-slot:prepend-inner>
            <v-icon>search</v-icon>
        </template>
        <template v-slot:append>
            <v-progress-circular
                v-if="loading"
                size="24"
                color="primary"
                indeterminate />
        </template>
      </v-text-field>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    computed: {
        // title은 v-model로 선언되어 양방향 전송이 되어진다.
        // 그래서 set을 할 때는 store mutations의 도움을 받아야하고,
        // 출력할 때는 state의 데이터를 리턴받는 구조로 만들어야 한다. 
        title: {
            // Getter
            get () {
                return this.$store.state.movie.title
            },
            // Setter
            set (title) {
                this.$store.commit('movie/updateState', {
                    title // title: title
                })
            }
        },
        loading(){
            return this.$store.state.movie.loading
        }
    },
    methods: {
        ...mapActions('movie', [ // 전개 연산자를 사용해야함
            'searchMovies'
        ])
    }
}
</script>

<style>

</style>