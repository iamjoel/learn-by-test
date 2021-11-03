# 通过写测试用例来学习
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
### JavaScript
* 基础: [if](code/src/js/basic/if.spec.ts)，[循环](code/src/js/basic/loop.spec.ts)。
* 数据类型: [数字](code/src/js/data-type/number.spec.ts)，[字符串](code/src/js/data-type/string.spec.ts)，[正则](code/src/js/data-type/regexp.spec.ts)，[数组](code/src/js/data-type/array.spec.ts)，[对象](code/src/js/data-type/object.spec.ts)，[函数](code/src/js/data-type/function.spec.ts)，[枚举](code/src/js/data-type/enum.spec.ts)。
* [this](code/src/js/this/index.spec.ts) 还有 [这里](code/src/js/this/index.e2e.spec.ts)
* ES6: [Promise](code/src/js/es6/promise.spec.ts)，[async/await](code/src/js/es6/async-await.spec.ts)。
* [DOM](code/src/js/dom/index.e2e.spec.ts)

### CSS
* [选择器优先级](code/src/css/selector-priority/index.e2e.spec.ts)
* [Flex 布局](code/src/css/flex/index.e2e.spec.ts)

### Node.js
* [fs](code/src/node/fs/index.spec.ts)
* [path](code/src/node/path.spec.ts)

### 第三方库
* [React](code/src/libs/react/Button.spec.tsx)
* [Lodash](code/src/libs/lodash.spec.ts)
* [Jest](code/src/libs/jest/index.spec.ts)
* [Puppeteer](code/src/libs/puppeteer/index.e2e.spec.ts)

### 其他
* [接口测试](code/src/api/index.api.spec.ts)