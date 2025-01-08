import Breadcrumb from "./breadcrumb.vue";

// 单个组件引用
Breadcrumb.install = (app) => {
	app.component(Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;
