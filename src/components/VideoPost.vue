<template>
<div class="main-post">
  <img class="main-video" style="width: 360px;height: 200px;" @click="goToVideo" @mouseleave="stopVideo" @mouseover="playVieo"  :src="HoverVideo">
  <div class="video-footer">
    <div class="video-footer-head">
      <img class="owner-image" :src="product.ownerImage" />
    </div>
    <div class="video-detail">
      <div class="video-name">
        <span>{{product.title}}</span>
      </div>

      <span class="owner-name">{{product.ownerName}}</span>
      <div class="video-info">
        <span class="view-count">{{product.viewCount}} B görüntülenme </span>
        <span style="font-size: 14px;font-weight: bolder">&#183;</span>
        <span class="publish-date">{{product.publishDateInMonth}} gün önce</span>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "Product",
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
.main-post{
  display: flex;
  gap: 5px;
  width: 360px;
  flex-direction:  column;
}
.main-video{
  display: flex;
}
.video-footer-head{
}
.video-name{
  display: flex;
  height: 36px;
  box-sizing: content-box;
  text-align: left;
  align-items: center;
  color: white;
  font-size: 14px;

}
.video-footer{
  display: flex;
  gap: 10px;
  flex-direction:  row;
}
.video-info{
   display: flex;
   gap: 10px;
    color :rgb(170, 170, 170);
    font-size: 12px;

 }
.video-detail{
  display: flex;
  gap: 5px;
  flex-direction:  column;
  align-items: self-start;
}
.owner-name
{
  font-size: 12px;
  color :rgb(170, 170, 170);
}

.owner-image{
  width: 36px;
  height: 36px;
  border-radius: 15px;
}
</style>