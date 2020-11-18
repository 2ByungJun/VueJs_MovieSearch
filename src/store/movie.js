import axios from 'axios'

export default{
    namespaced: true, // movie라는 namespace를 사용할 수 있게한다.
    state: () => ({
        title: '',
        loading: false,
        movies: [],
    }),
    mutations: {
        updateState(state, payload){
            // 범용화 되는 update state가 된다.
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        pushIntoMovies(state, movies){
            state.movies.push(...movies) // ... 전개연산자로 아이템 단위를 끊어준다.
        }
    },
    actions: {
        async searchMovies({ state, commit}) {
            commit('updateState', {
                loading: true,
            })
            const res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=e77f1431&s=${state.title}&page=1`)
            const pageLength = Math.ceil(res.data.totalResults / 10) // 올림처리

            commit('updateState', {
                movies: res.data.Search,
            })

            if(pageLength > 1){
                for( let i = 2; i <= pageLength; i += 1){
                    if( i > 4 ) break 
                    const resMore = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=e77f1431&s=${state.title}&page=${i}`)
                    commit('pushIntoMovies', resMore.data.Search)
                }
            }
            commit('updateState', {
                loading: false
            })
        }
    },
    getter: {

    }
}