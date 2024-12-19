<PageHeader content="Vue 3 响应式原理" />

## 如何监听对象状态发生了改变？

- 利用 Proxy 代理对象，拦截对象属性的读取、赋值、删除等操作
- 利用 Reflect 操作对象属性

```js
const person = {
	name: "张三",
};

const handler = {
	get() {
		console.log(`获取属性 `);
		return Reflect.get(...arguments);
	},
	set() {
		console.log(`设置属性 `);
		return Reflect.set(...arguments);
	},
};

const proxy = new Proxy(person, handler); // 对象代理
proxy.name = "李四"; // 设置属性
console.log(proxy.name); // 获取属性 name
```

## 如何存储、触发副作用函数 effect？

- 需要一个全局的 proxy 对象，用来存储被代理的对象
- 需要一个全局的 deps 对象，用来存储副作用函数
- 需要一个全局的 track 函数，用来追踪依赖关系
- 需要一个全局的 trigger 函数，用来触发依赖更新

```js
const person = {
	name: "张三",
};

const deps = new Set(); // 依赖集合

// 副作用函数
const effect = () => {
	console.log(`执行副作用函数 effect`);
};
// 收集依赖
function track() {
	deps.add(effect);
}

// 触发依赖
function trigger() {
	deps.forEach((fn) => {
		fn();
	});
}

const handler = {
	get() {
		track(); // 收集依赖
		return Reflect.get(...arguments);
	},
	set() {
		trigger(); // 触发依赖
		return Reflect.set(...arguments);
	},
};

const proxy = new Proxy(person, handler); // 对象代理

proxy.name; // 监听，触发依赖收集
proxy.name = "李四"; // 触发，effect 执行
```
