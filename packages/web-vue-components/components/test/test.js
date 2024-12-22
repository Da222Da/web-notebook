import Test from "./Test.vue"

// 单个组件引用
Test.install = (app) => {
    app.component(Test.name || 'Test', Test);
};

export default Test;