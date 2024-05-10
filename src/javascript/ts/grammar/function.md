<PageHeader content="函数" />

## 简介

函数，就是一段可以重复调用的代码块。像这样：

```ts
function add(x: number, y: number): number {
	return x + y;
}

let result = add(1, 2);
```

- `关键词 function` 用于声明函数
- `参数` 我们把函数的输入内容叫做参数`如，x、y`
- `返回值` 我们把函数的输出值叫做返回值

## 可选参数

可选参数，就是参数后面加个问号。

```ts
function buildName(firstName: string, lastName?: string) {
	if (lastName) {
		return firstName + " " + lastName;
	} else {
		return firstName;
	}
}

let result1 = buildName("Bob"); // 正确
let result2 = buildName("Bob", "Adams", "Sr."); // 错误，参数太多了
let result3 = buildName("Bob", "Adams"); // 正确
```

## 默认参数

默认参数，就是参数后面加个等号，然后赋值。

```ts
function buildName(firstName: string, lastName = "Smith") {
	return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // 正确
// 返回 'Bob Smith'
let result2 = buildName("Bob", undefined); // 正确
// 返回 'Bob Smith'
```

## 剩余参数

剩余参数，就是用三个点号（...）表示，可以接收任意数量的参数。

```ts
function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```

## 重载

重载，就是函数名相同，但是参数不同的多个函数。

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
	if (typeof x === "number") {
		return Number(x.toString().split("").reverse().join(""));
	} else if (typeof x === "string") {
		return x.split("").reverse().join("");
	}
}
```

## 箭头函数

箭头函数，就是用一个箭头（=>）表示。

```ts
let myAdd = (x: number, y: number): number => {
	return x + y;
};
```

## 匿名函数

匿名函数，就是没有名字的函数。

```ts
let myAdd = function (x: number, y: number): number {
	return x + y;
};
```

## 函数表达式

函数表达式，就是用一个变量来表示一个函数。

```ts
let myAdd = function (x: number, y: number): number {
	return x + y;
};
```

## 立即执行函数

立即执行函数，就是用一个括号（()）来表示一个函数。

```ts
(function (x, y) {
	return x + y;
})(1, 2);
```
