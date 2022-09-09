# 通过写测试用例来学习
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
[![learn by test](https://circleci.com/gh/iamjoel/learn-by-test.svg?style=svg)](https://circleci.com/gh/iamjoel/learn-by-test)

通过写测试用例来学习是一种**高效的学习方法**。

## 为什么可以通过测试用例来学习
学习的过程，是了解输入输出的过程。学习语法，就是学习支持怎样的写法（即输入），能达到怎样的效果（即输出）。学习 API，就是学习 API 支持哪些输入，会有怎样的对应的输出。

写测试用例，就是给定输入，判断输出和预期是否一致。这个过程和学习的过程是一致的。比如：学习数组的 `unshift` 的方法，可以写如下的测试用例：
```js
describe('unshift：添加一个或多个元素到开头', () => {
  test('添加一个元素到开头', () => {
    const arr = [1, 2]
    arr.unshift(0)
    expect(arr).toEqual([0, 1, 2])
  })

  test('添加多个元素到开头', () => {
    const arr = [1, 2]
    arr.unshift(-2, -1, 0)
    expect(arr).toEqual([-2, -1, 0, 1, 2])
  })

  test('返回值是添加后的数组长度', () => {
    const arr = ['a', 'b']
    const res = arr.unshift('c')
    expect(res).toBe(3)
  })
})
```

## 为什么是高效的
在学习中的过程中，付出的努力越多，学习效果越好。

> 普林斯顿大学的 Pam A. Mueller 学者和 UCLA 的 Daniel Oppenheimer 联合做了一项实验，他们让两组大学生分别用电脑和手写做笔记，然后对他们观看的讲座内容进行测试，看看到底如何记笔记效果更好。
> 实验的结果是：手写笔记好。用电脑记笔记的人，由于打字速度快，只是无脑的记。手写的，由于他们不能快速记录，必须提炼记录的内容。这是个思考的过程。

用测试来学，需要设计测试用例。设计测试用例的过程，是一个思考，加深印象的过程。比如，学习 Flex 布局，有个特性是：主轴是行的的 Flex 容器下，子项在一行。我设计了这样如下的用例：
```js
const posYArr = await page.evaluate(() => {
  const items = document.querySelectorAll('.ly>.item')
  return [
    items[0].getBoundingClientRect().top,
    items[1].getBoundingClientRect().top,
    items[2].getBoundingClientRect().top,
  ]
})
expect(posYArr[0]).toBe(posYArr[1])
expect(posYArr[1]).toBe(posYArr[2])
```


## 内容
### 前端 
#### JavaScript
* 基础: [if](frontend/src/js/basic/if.spec.ts)，[循环](frontend/src/js/basic/loop.spec.ts)。
* 数据类型: [数字](frontend/src/js/data-type/number.spec.ts)，[字符串](frontend/src/js/data-type/string.spec.ts)，[正则](frontend/src/js/data-type/regexp.spec.ts)，[数组](frontend/src/js/data-type/array.spec.ts)，[对象](frontend/src/js/data-type/object.spec.ts)，[函数](frontend/src/js/data-type/function.spec.ts)，[枚举](frontend/src/js/data-type/enum.spec.ts)，[Set](frontend/src/js/data-type/set.spec.ts)。
* [this](frontend/src/js/this/index.spec.ts) 还有 [这里](frontend/src/js/this/index.e2e.spec.ts)
* ES6+: [Promise](frontend/src/js/es6/promise.spec.ts)，[async/await](frontend/src/js/es6/async-await.spec.ts)，[解构赋值](frontend/src/js/es6/destructuring-assignment.spec.ts)，[JavaScript Modules](frontend/src/js/es6/module/index.spec.ts)，[可选链操作符(?.)](frontend/src/js/es6/optional-chain.spec.ts)，[空值合并运算符(??) 和 逻辑空赋值(??=)](frontend/src/js/es6/nullish-operator.spec.ts)。
* [DOM](frontend/src/js/dom/index.e2e.spec.ts)
* 最佳实践：[去重](frontend/src/js/best-practice/unique/index.spec.ts)，[最大值](frontend/src/js/best-practice/max/index.spec.ts)，[求和](frontend/src/js/best-practice/sum/index.spec.ts)，[删除元素](frontend/src/js/best-practice/remove/index.spec.ts)

#### [设计模式](frontend/src/design-pattern/README.md)
##### 创建型模式
[抽象工厂模式](frontend/src/design-pattern/creational/abstract-factory/index.spec.js)，[工厂模式](frontend/src/design-pattern/creational/factory-method/index.spec.js)，[建造者模式](frontend/src/design-pattern/creational/builder/index.spec.js)，[原型模式](frontend/src/design-pattern/creational/prototype/index.spec.js)，[单例模式](frontend/src/design-pattern/creational/singleton/index.spec.js)。

##### 结构型模式
[适配器模式](frontend/src/design-pattern/structural/adapt/index.spec.js)，[桥接模式](frontend/src/design-pattern/structural/bridge/index.spec.js)，[组合模式](frontend/src/design-pattern/structural/composite/index.spec.js)，[装饰器模式](frontend/src/design-pattern/structural/decorate/index.spec.js)，[外观模式](frontend/src/design-pattern/structural/facade/index.spec.js)，[享元模式](frontend/src/design-pattern/structural/flyweight/index.spec.js)，[代理模式](frontend/src/design-pattern/structural/proxy/index.spec.js)。

##### 行为型模式
[责任链模式](frontend/src/design-pattern/behavioral/chain-of-resp/index.spec.js)，[命令模式](frontend/src/design-pattern/behavioral/command/index.spec.js)，[解释器模式](frontend/src/design-pattern/behavioral/interpreter/index.spec.js)，[迭代器模式](frontend/src/design-pattern/behavioral/iterator/index.spec.js)，[中介者模式](frontend/src/design-pattern/behavioral/mediator/index.spec.js)，[备忘录模式](frontend/src/design-pattern/behavioral/memento/index.spec.js)，[观察者模式](frontend/src/design-pattern/behavioral/observer/index.spec.js)，[状态模式](frontend/src/design-pattern/behavioral/state/index.spec.js)，[策略模式](frontend/src/design-pattern/behavioral/strategy/index.spec.js)
，[模板模式](frontend/src/design-pattern/behavioral/template/index.spec.js)
，[访问者模式](frontend/src/design-pattern/behavioral/visitor/index.spec.js)。

#### TypeScript
* [常用写法](frontend/src/ts/common.spec.ts)
* [泛型](frontend/src/ts/generic.spec.ts)

#### CSS
* [选择器优先级](frontend/src/css/selector-priority/index.e2e.spec.ts)
* [Flex 布局](frontend/src/css/flex/index.e2e.spec.ts)

#### 第三方库
* React
  * [组件](frontend/src/libs/react/component/Button.spec.tsx)
  * [HOC](frontend/src/libs/react/hoc/Hoc.spec.tsx)
* Vue3
  * 模板语法：[循环](frontend/src/libs/vue/vue3/src/components/template/Repeat.spec.js)
  * 组合式 API
    * [属性](frontend/src/libs/vue/vue3/src/components/data/Props.spec.js)
* 基础库工具库: [Lodash](frontend/src/libs/lodash.spec.ts)，[moment](frontend/src/libs/moment.spec.ts)，[时间操作封装](frontend/src/libs/time/util.spec.ts)，[query-string](frontend/src/libs/query-string.spec.ts)，[路径匹配库: micromatch](frontend/src/libs/micromatch.spec.ts)，[mockjs](frontend/src/libs/mockjs.spec.ts)。
* 测试库: [Jest](frontend/src/libs/jest/index.spec.ts)，[Puppeteer](frontend/src/libs/puppeteer/index.e2e.spec.ts)。
* 数据管理: [状态机:XState](frontend/src/libs/data-manage/xstate.spec.ts)
* 其他：[任务队列管理库:queue](frontend/src/libs/other/queue/index.spec.ts)

### 其他
* [接口测试](frontend/src/api/index.api.spec.ts)

### Node.js
* [fs](node/src/fs/index.spec.ts)
* [path](node/src/path.spec.ts)
* [EventEmitter](node/src/event-emitter.spec.ts)
* 第三方库
  * [lowdb](node/src/libs/lowdb/index.spec.ts)

### Go
* 基础: [变量](go/src/basic/var/var_test.go)，[导入&导出](go/src/basic/pkg-test/pkg_test.go)。



