<template>
<div>
  <Header/>


  <LoadingSpinner v-if="!IsLoaded"/>
  <div id="post-list">
    <VideoPost  v-for="item in VideoList" :key="item.id" :video="item"  />
  </div>
</div>
</template>

<script>
import Header from "../components/Header";
import { mapState } from 'vuex'
import VideoPost from "../components/VideoPost";
import LoadingSpinner from "../components/LoadingSpinner";


export default {
  name: "VideoListPage",
  components:{
    LoadingSpinner,
    VideoPost,
    Header
  },
  data(){
    return{
      isLoaded:false
    };
  },
  computed:{
    IsLoaded(){
      return this.isLoaded;
    },
    ...mapState({
      VideoList:'VideoList',
      IsLoaded:'IsLoaded'
    })
  },
  created() {
    this.$store.dispatch('VideoList')
  },
}
</script>

<style scoped>
#post-list{
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: left;
padding: 20px 1%;
background-color: rgb(18,18,18);
}
</style>