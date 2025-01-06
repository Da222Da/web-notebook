import Test from "./components/test/index.js";
import WvcButton from "./components/button/index.js";

const components = [Test, WvcButton];

// 全局组件一次性引用
const install = (app) => {
	components.forEach((component) => {
		app.component(component.name, component);
	});
};

export { install, Test, WvcButton };

export default install;
