import "element-plus/dist/index.css"; // 引入 element-plus 样式

import ElBreadcrumb from "./components/Breadcrumb/index.js";
import ElMindmap from "./components/MindMap/index.js";

const components = [ElBreadcrumb, ElMindmap];

// 全局组件一次性引用
const install = (app) => {
	components.forEach((component) => {
		console.log("component::: ", component);
		app.component(component.name, component);
	});
};

export { install, ElBreadcrumb, ElMindmap };

export default install;
