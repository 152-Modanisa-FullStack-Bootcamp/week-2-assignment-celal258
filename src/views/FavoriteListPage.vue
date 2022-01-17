<template>

  <div>
    <Header/>
    <LoadingSpinner v-if="!IsLoaded"/>
    <div id="favori-list">
      <Favorite  v-for="item in favoriteProduct" :key="item.id" :product="item"  />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import API from "../api";
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
      ProductList:[],
      isLoaded:false
    };
  },
  computed:
    {
    favoriteProduct()
    {
      return this.ProductList.filter(element=>element.favorite);
    },
    IsLoaded(){
      return this.isLoaded;
    }
  },
  async mounted() {
    this.ProductList=await API.getProductList();
    this.isLoaded=true;
  }

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