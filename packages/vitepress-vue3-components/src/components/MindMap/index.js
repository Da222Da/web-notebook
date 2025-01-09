import ElMindmap from "./mindmap.vue";

// 单个组件引用
ElMindmap.install = (app) => {
	app.component(ElMindmap.name, ElMindmap);
};

export default ElMindmap;
