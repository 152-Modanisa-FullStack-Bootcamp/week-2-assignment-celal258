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
      if(this.$route.name=="Videos"){
        this.$router.push({ name: 'Favorites', params: { userId: '1' } });
      }
      else{
        this.$router.push("/")
      }
    }
  },
  mounted() {
    if(this.$route.name=="Videos"){
      this.backState="Favorites";
    }
    else{
      this.backState="Videos";
    }
  }
}
</script>

<style scoped>
#header-content{
  display: flex;
  justify-content: right;
  padding: 15px 50px;
}
</style>