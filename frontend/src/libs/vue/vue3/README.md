# vue3-project
## 脚手架
```sh
npm init vue@latest
```

[文档](https://staging-cn.vuejs.org/guide/quick-start.html#with-build-tools)。

## IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

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
* 构建工具: Vite。
* 状态管理: pinia。
* 路由: vue router。
* 测试：Vitest，Cypress。
