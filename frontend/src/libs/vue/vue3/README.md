# vue3-project
## 脚手架
```sh
npm init vue@latest
```

[文档](https://staging-cn.vuejs.org/guide/quick-start.html#with-build-tools)。

## IDE

[VSCode](https://code.visualstudio.com/) + 

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## 安装依赖

```sh
npm install
```

node 版本: v16.13.0。

### 开发

```sh
npm run dev
```

### 构建

```sh
npm run build
```

### 单元测试
[Vitest](https://vitest.dev/)。[中文版](https://cn.vitest.dev/)。

```sh
npm run test:unit
```

Vitest 的 api 和 Jest 的很类似。

### E2E测试
[Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

## 生态
### 路由
[Vue Router](https://router.vuejs.org/zh/)：^4.0.14。

详细见 [这里](./docs/vue-router.md)

### 构建工具: Vite
配置文件：`vite.config.js`。
配置路径别名：
```js
resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}
```

### 状态管理: pinia

### 测试
单元测试，组件测试：Vitest 和 [Vue Test Utils](https://test-utils.vuejs.org/)


E2E测试： Cypress。

### 开发插件 
* Chrome 插件: [devtools](https://github.com/vuejs/devtools)
* VSCode 插件
  * [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) 
  * [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

### 更多资源
* [Vue patterns](https://learn-vuejs.github.io/vue-patterns/) Vue 的设计模式。
* [Awesome Vue.js](https://github.com/vuejs/awesome-vue)

## 其他
import.meta.env.BASE_URL