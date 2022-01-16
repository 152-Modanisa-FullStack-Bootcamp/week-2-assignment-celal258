<template>
<div>
  <Header/>
  <div id="post-list">
    <Product  v-for="item in ProductList" :key="item.id" :product="item"  />
  </div>
</div>
</template>

<script>
import Header from "../components/Header";
import API from "../api";
import Product from "../components/VideoPost";

export default {
  name: "ProductListPage",
  components:{
    Product,
    Header
  },
  data(){
    return{
      ProductList:[]
    };
  },
  async mounted() {
    this.ProductList=await API.getProductList();
  }
}
</script>

<style scoped>
#post-list{
display: flex;
flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding-top: 10px;
  background-color: rgb(18,18,18);
}
</style>