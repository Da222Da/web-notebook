import ElBreadcrumb from "./breadcrumb.vue";

// 单个组件引用
ElBreadcrumb.install = (app) => {
	app.component(ElBreadcrumb.name, ElBreadcrumb);
};

export default ElBreadcrumb;
