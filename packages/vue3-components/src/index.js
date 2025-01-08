import "element-plus/dist/index.css"; // 引入 element-plus 样式

import Breadcrumb from "./components/Breadcrumb/index.js";
import MindMap from "./components/MindMap/index.js";

const components = [Breadcrumb, MindMap];

// 全局组件一次性引用
const install = (app) => {
	components.forEach((component) => {
		app.component(component.name, component);
	});
};

export { install, Breadcrumb, MindMap };

export default install;
