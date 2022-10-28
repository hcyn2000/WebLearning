import Vue from "vue";

// 注册三级联动--全局组件
import TypeNav from "@/components/TypeNav";
// 第一个参数：全局组件的名称  第二个参数：引入的组件
Vue.component(TypeNav.name, TypeNav);

// 注册轮播图--全局组件
import Carousel from "@/components/Carousel";
// 第一个参数：全局组件的名称  第二个参数：引入的组件
Vue.component(Carousel.name, Carousel);

// 注册轮播图--全局组件
import Pageination from "@/components/Pageination";
// 第一个参数：全局组件的名称  第二个参数：引入的组件
Vue.component(Pageination.name, Pageination);
