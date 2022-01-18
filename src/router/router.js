import Vue from "vue";
import VueRouter from "vue-router";
import VideoPostListPage from "../views/VideoPostListPage";
import FavoriteListPage from "../views/FavoriteListPage";


Vue.use(VueRouter)
const router =new VueRouter({
    mode: 'history',
    routes:[
        {name:"Videos",path:"/",component:VideoPostListPage},
        {name:"Favorites",path:"/favorite/:userId",component:FavoriteListPage}
    ]
})

export default router;