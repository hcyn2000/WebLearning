import Vfocus from "@/utils/directive/Vfocus"; // 让input 聚焦
import Vposition from "./Vposition";

export default function (app) {
  app.directive("focus", Vfocus);
  app.directive("position", Vposition);
}
