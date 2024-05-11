import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./pages/LoginPage.vue";
import DoneLogin from "./pages/DoneLogin.vue";

const routes =[
{ path:"/login", component:LoginPage},
{ path:"/done", component:DoneLogin},
]
const router =createRouter({
history : createWebHistory(),
routes,
})

export default router;