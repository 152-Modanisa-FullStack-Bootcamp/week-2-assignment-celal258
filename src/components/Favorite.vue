<template>
  <div class="favorite-main">
    <img class="main-video" @click="goToVideo" @mouseleave="stopVideo" @mouseover="playVieo"  :src="HoverVideo"/>
    <div class="video-right">
      <div class="video-detail">
        <span class="video-name">{{product.title}}</span>
        <div class="video-info">
          <span class="view-count">{{product.viewCount}} B görüntüleme</span>
          <span style="font-size: 14px;font-weight: bolder"> &#183; </span>
          <span class="publish-date">{{product.publishDateInMonth}} hafta önce</span>
        </div>
      </div>
      <div class="owner-info">
        <img class="owner-image" :src="product.ownerImage"  />
        <span>{{product.ownerName}}</span>
      </div>

      <span class="description">{{product.description.substring(0, 70) + "..."}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favorite",
  props:["product"],
  data(){
    return{
      hoverVideo:""
    };
  },
  methods:{
    goToVideo(){
      this.$router.push({ path: 'watch', query: { id:this.product.id }})
    },
    playVieo(){
      this.hoverVideo=this.product.hoverImage;
    },

    stopVideo(){
      this.hoverVideo=this.product.coverImage;
    }
  },
  computed:{
    HoverVideo(){
      return this.hoverVideo;
    }
  },
  mounted() {
    this.hoverVideo=this.product.coverImage;
  }
}
</script>

<style scoped>
.favorite-main {
  display: flex;
  gap:10px;
  flex-direction: row;
}
.main-video{
  width: 360px;height: 200px;
}
.video-right{
  display: flex;
  flex-direction: column;
  align-items: self-start;
  justify-content: left;
  gap: 15px;
}
.video-name{
font-size: 18px;
  color: white;
}
.video-info{
  font-size: 12px;
  color: rgb(170, 170, 170);
}
.view-count{

}
.publish-date{

}
.publish-date{

}
.video-detail{
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  gap:2px;
}
.owner-info{
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: rgb(170, 170, 170);
}
.owner-info:hover{
   color: white;
 }
.owner-image{
  width: 24px;
  height: 24px;
  border-radius: 10px;
}
.description{
  font-size: 12px;
  color: rgb(170, 170, 170);
}
</style>