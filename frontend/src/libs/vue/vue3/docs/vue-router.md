# Vue Router ^4.0.14
## 路由定义
```js
{
  path: '/',
  redirect: '/home',
  name: 'default',
},
{
  path: '/home',
  name: 'home',
  component: HomeView,
  children: [
    {
      path: 'sub-a',
      name: 'sub-a',
      component: SubA
    },
    { // 以 / 开头，不继承父路径
      path: '/other/sub-b',
      name: 'sub-b',
      component: SubB
    },
  ]
},
```

参数
```js
path: '/detail/:id',

// 可选参数
path: '/detail/:id?', // 匹配 /detail 和 /detail/1

// 参数正则的验证
path: '/detail/:id(\\d+)', // id 只能是数字

// 重复的参数
path: '/:chapters+' // /:chapters ->  匹配 /one, /one/two, /one/two/three, 等
path: '/:chapters*' // /:chapters -> 匹配 /, /one, /one/two, /one/two/three, 等
```

路由生效的权重： [这里](https://paths.esm.dev/?p=AAMeJSyAwR4UbFDAFxAcAGAIJXMAAA..#)。

404 的配置：
```js
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound
}
```

## 惰性加载路由对应的组件文件
```js
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/AboutView.vue')
}
```

## 路由 API
```js
import { useRouter, useRoute, RouterLink } from 'vue-router'
const router = useRouter()
const route = useRoute()

router.push({
  name: 'home'
})

<RouterLink to="/">返回首页</RouterLink>
```

跳转不行。。。

#### 不同的历史记录模式
h5 模式：
```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //...
  ],
})
```

需要服务器端做配置。

Hash 模式：
```js
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //...
  ],
})
```

缺点：对 SEO 不友好。

## 路由生命周期钩子
通用： before，after


对某个路由，离开前检查。


## 多个 router-view
比如 多tab。