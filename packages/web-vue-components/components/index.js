import Test from "@/components/Test.vue"

const components = [Test]

// 全局组件一次性引用
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
}

export {
    Test,
    install
}

export default install