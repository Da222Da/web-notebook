import MindMap from "./mindmap.vue";

// 单个组件引用
MindMap.install = (app) => {
	app.component(MindMap.name, MindMap);
};

export default MindMap;
