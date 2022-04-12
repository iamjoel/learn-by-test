# 测试
单元测试，组件测试：[Vitest](https://cn.vitest.dev/) 和 [Vue Test Utils](https://test-utils.vuejs.org/)

E2E测试： Cypress。

## 命令
```sh
yarn test:unit
```

## 注意
node 的版本要 v16 及以上。否则会报错：`UnhandledPromiseRejectionWarning: Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Only file and data URLs are supported by the default ESM loader`。