import HelloWorld from "@/components/HelloWorld.vue";

const plugins = {
	install(app) {
		// 注册全局方法 $test

		app.config.globalProperties.$test = () => {
			console.log("this is a test plugin");
		};

		app.component("hello-world", HelloWorld);
		app.provide("msg", { msg: "from plugin" });
	},
};

export default plugins;
