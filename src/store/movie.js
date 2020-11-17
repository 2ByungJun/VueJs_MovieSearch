import axios from 'axios'

export default{
    namespaced: true, // movie라는 namespace를 사용할 수 있게한다.
    state: () => ({
        title: '',
        loading: false,
        movies: []
    }),
    mutations: {
        updateState(state, payload){
            // 범용화 되는 update state가 된다.
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },
    actions: {
        async searchMovies({state, commit}) {
            commit('updateState', {
                loading: true
            })
            const res = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=e77f1431&s=${state.title}`)
            console.log(res.data)
            commit('updateState', {
                movies: res.data.Search,
                loading: false
            })
        }
    },
    getter: {

    }
}