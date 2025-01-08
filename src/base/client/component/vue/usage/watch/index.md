<PageHeader content="侦听器 watch & watchEffect" />

> `侦听器 watch & watchEffect` 用于在状态发生改变时，执行一些“副作用函数”。

## watch() 函数

> `watch()` 函数用于侦听特定的状态，并在状态发生改变时，能观察新旧状态的变化。

<!--@include: ./children/watch.md-->

## watchEffect() 函数

> `watchEffect()` 函数会自动收集依赖，并触发对应的副作用函数

<!--@include: ./children/watchEffect.md-->
