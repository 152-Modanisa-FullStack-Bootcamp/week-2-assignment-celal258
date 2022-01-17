<template>
<div>
  <Header/>


  <LoadingSpinner v-if="!IsLoaded"/>
  <div id="post-list">
    <Product  v-for="item in ProductList" :key="item.id" :product="item"  />
  </div>
</div>
</template>

<script>
import Header from "../components/Header";
import API from "../api";
import Product from "../components/VideoPost";
import LoadingSpinner from "../components/LoadingSpinner";


export default {
  name: "ProductListPage",
  components:{
    LoadingSpinner,
    Product,
    Header
  },
  data(){
    return{
      ProductList:[],
      isLoaded:false
    };
  },
  computed:{
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
#post-list{
display: flex;
flex-wrap: wrap;
gap: 10px;
justify-content: left;
padding: 20px 1%;
background-color: rgb(18,18,18);
}
</style>