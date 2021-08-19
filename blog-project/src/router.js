import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter); // 뷰 라우터를 사용하겠다.

const router = new VueRouter({
    mode : "history",
    routes : [// 어디로 넘길지
        {
            path:"/", component : Home
        },
        {
            path:"/about", component : About// path에 about이 들어오면 about으로 연결
        } 
    ] 
});

export default router