import {createRouter, createWebHistory} from 'vue-router'
import Fruits from './pages/Fruits.vue'
import Calendar from './pages/Calendar.vue'
import Home from './pages/Home.vue'
import Markdown from './pages/Markdown.vue'
import SLider from './pages/Slider.vue'
import DemoThree from './pages/DemoThree'

const routes = [
    {path:"/", component: Home},
    {path:"/Fruits", component: Fruits},
    {path:"/Calendar", component: Calendar},
    {path:"/Markdown", component: Markdown},
    {path:"/Slider", component: SLider},
    {path:"/DemoThree", component: DemoThree}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;