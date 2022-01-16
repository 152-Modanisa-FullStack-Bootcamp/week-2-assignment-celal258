import Vue from "vue";
import VueRouter from "vue-router";
import ProductListPage from "../views/VideoPostListPage";
import FavoriteListPage from "../views/FavoriteListPage";


Vue.use(VueRouter)
const router =new VueRouter({
    mode: 'history',
    routes:[
        {name:"Products",path:"/",component:ProductListPage},
        {name:"Favorites",path:"/favorite/:userId",component:FavoriteListPage}
    ]
})

export default router;