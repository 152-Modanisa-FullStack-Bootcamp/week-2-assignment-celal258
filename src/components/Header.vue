<template>
  <div id="header-content">
  <button @click="gotoFavorite">{{ backState }}</button>
  </div>
</template>

<script>
export default {
  name: "Header",
  data()
  {
    return{
      backState:"Favorites"
    }
  },
  methods:{
    gotoFavorite(){
      if(this.$route.name=="Products"){
        this.$router.push("/favorite/1");
      }
      else{
        this.$router.push("/")
      }
    }
  },
  mounted() {
    if(this.$route.name=="Products"){
      this.backState="Favorites";
    }
    else{
      this.backState="Products";
    }
  }
}
</script>

<style scoped>
#header-content{
  display: flex;
  justify-content: right;
}
</style>