import Vue from 'vue'
import Vuex from 'vuex'
import API from "../api";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        VideoList:[],
        IsLoaded:false
    },
    getters:{},
    mutations: {
        setVideoList(state,videos){
            state.VideoList=videos;
        },
        setIsLoaded(state,isLoaded){
            state.IsLoaded=isLoaded;
        }
    },
    actions:{
        async VideoList({commit}){
            commit("setVideoList",await API.getProductList())
            commit("setIsLoaded",true)
        }
    }
})
export default store;