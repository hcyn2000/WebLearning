import Vue from "vue";

// 注册三级联动--全局组件
import TypeNav from "@/components/TypeNav";
// 第一个参数：全局组件的名称  第二个参数：引入的组件
Vue.component(TypeNav.name, TypeNav);

// 注册轮播图--全局组件
import Carousel from "@/components/Carousel";
// 第一个参数：全局组件的名称  第二个参数：引入的组件
Vue.component(Carousel.name, Carousel);

// 注册分页--全局组件
import Pageination from "@/components/Pageination";
// 第一个参数：全局组件的名称  第二个参数：引入的组件
Vue.component(Pageination.name, Pageination);

// 注册element-组件
import { MessageBox } from "element-ui";
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 注册图片懒加载组件
import ldjj from "@/assets/1.gif";
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  loading: ldjj,
});

// 注册自定义插件
import myPlugins from "@/plugins/myPlugins";
Vue.use(myPlugins, { name: "upper" });

// 注册vee-validate插件  表单验证
import VeeValidate from "vee-validate";
import zh_CN from "vee-validate/dist/locale/zh_CN";
Vue.use(VeeValidate);

//表单验证
VeeValidate.Validator.localize("zh_CN", {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}必须与密码相同`, // 改内规则的 message，让确认密码和密码相同
  },
  // 给校验的 field 属性名映射中文名称
  attributes: {
    phone: "手机号",
    code: "验证码",
    password: "密码",
    password1: "确认密码",
    agree: "协议",
  },
});

// 自定义校验规则
VeeValidate.Validator.extend("agree", {
  validate: (value) => {
    return value;
  },
  getMessage: (field) => field + "必须同意",
});
