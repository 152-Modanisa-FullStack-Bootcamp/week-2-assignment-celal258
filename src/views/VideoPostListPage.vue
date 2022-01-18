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
import API from "../api";
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
      VideoList:[],
      isLoaded:false
    };
  },
  computed:{
    IsLoaded(){
      return this.isLoaded;
    }
  },
  async mounted() {
    this.VideoList=await API.getVideoList();
    this.isLoaded=true;
  }
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