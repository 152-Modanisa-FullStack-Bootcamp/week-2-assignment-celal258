<template>

  <div>
    <Header/>
    <LoadingSpinner v-if="!IsLoaded"/>
    <div id="favori-list">
      <Favorite  v-for="item in favoriteVideos" :key="item.id" :video="item"  />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import { mapState } from 'vuex'
import Favorite from "../components/Favorite";
import LoadingSpinner from "../components/LoadingSpinner";

export default {
  name: "FavoriteListPage",
  components: {
    LoadingSpinner,
    Favorite,
    Header
  },
  data(){
    return{
    };
  },
  computed:
    {
    favoriteVideos()
    {
      return this.VideoList.filter(element=>element.favorite);
    },
    ...mapState({
      VideoList:'VideoList',
      IsLoaded:'IsLoaded'
    })
  },

}
</script>

<style scoped>
#favori-list{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-start;
  justify-content: left;
  padding: 10px 20%;
  background-color: rgb(18,18,18);
}
</style>