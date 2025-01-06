import WvcButton from "./WvcButton.vue";

// 单个组件引用
WvcButton.install = (app) => {
	app.component(WvcButton.name, WvcButton);
};

export default WvcButton;
