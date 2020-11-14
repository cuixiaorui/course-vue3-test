# 创建你的第一个测试

## 介绍 jest

jest 是个前端测试框架，使用起来简单易用

已经有很多前端大型仓库选择使用包括：[Babel](https://babeljs.io/), [TypeScript](https://www.typescriptlang.org/), [Node](https://nodejs.org/en/), [React](https://reactjs.org/), [Angular](https://angular.io/), [Vue](https://vuejs.org/) and more!

[官网](https://jestjs.io/en/)

### 安装 jest

#### 添加 jest 依赖

首先我们先创建一个对应的项目，来体验体验 jest

```shell
mkdir learn-jest
cd learn-jest
npm init -y
```

好，项目已经初始化完成，那么我们接下来就需要安装 jest 库

```shell
npm i jest -D
```

因为 jest 是用于开发坏境，所以我们只需要安装到 devDependencies 即可

#### 配置 npm scripts

打开 package.json 文件

添加一下代码

```json
  "scripts": {
    'test':'jest'
  },
```

因为我们后续执行测试的时候，都需要调用 jest ，为了方便起见，我们可以直接配置 scripts ，后面我们在跑测试的时候只需要执行一下命令即可

```shell
npm run test 
//或者
npm test
//或者
npm t
```

#### 创建测试文件夹以及测试文件

在项目中直接创建文件夹 \__tests__ ，然后在文件夹内创建对应的测试文件，测试文件的命名需要遵循以下命名格式:

Xxx.spec.js 或者 xxx.test.js 

为什么要这么命名？

- 前端项目基本都是这样命名的，已经成为一个规范
- 和 jest 的配置相关，你完全可以自定义

不过这里还是推荐大家选用以上规范来命名

#### 添加匹配测试文件规则

不知道有没有同学想过，为什么是 \__tests__ , 为什么是 xxx.spec.js xxx.test.js  

保持你的好奇心是学习成长的关键

这里我们稍微深入一点 jest 

其实匹配这些测试文件是有对应的规则的，而规则其实就是 glob 形式的正则匹配规则

那这个规则在哪里呢？

其实 jest 是通过 [testmatch-arraystring](https://jestjs.io/docs/en/configuration#testmatch-arraystring) 来匹配的，可以看到 api 中默认的配置：

```js
testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]
```

这样我们用户就可以通过修改 testMatch 来达到自定义匹配规则的目的

那么我们应该怎么修改这个字段呢？去哪里定义呢？

你只需要添加一个 jest.config.json 文件到项目根目录下即可

然后通过配置这个 json 文件就可以达到修改 testMatch 的值了

比如：

```json
// jest.config.js
module.exports = {
  testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
};
```

这样就覆盖了默认值，只能匹配 \__tests__ 文件夹内的文件

#### 写第一个测试

我们已经知道如何执行测试，如何匹配测试文件了，那么我们现在应该写一个测试了。那怎么写测试的？

首先我们在 \__tests__ 文件夹下创建 add.test.js 文件  

添加以下代码

```js
function add(a, b) {
  return a + b;
}

module.exports = {
  add,
};
```



```js
test("add",  () => {
  // 测试三部曲
  // given -> add
  // when -> 1，1
  // then -> result
  const result = add(1, 1);
  expect(result).toBe(2);
});
```

这里的 test 函数是一个全局函数，不需要用户去导入，直接用就可以了。

第一个参数是当前这个测试的描述，第二个参数就是个 function ，我们需要在这里写我们的逻辑验证

#### 测试三部曲

那我们的测试需要怎么写呢？有没有套路

别说，还真有

如果你分析下你平时是如何做测试的话，就会发现一个特别有规则的点

第一步你肯定要为你测试的那个函数准备数据

第二步你肯定要调用你要测试的那个函数

最后你在基于这个函数给出的结果去验证，看看是否和你预期的一样

上面的这三部其实就是套路，我称之为测试三部曲

- given 
  - 准备测试数据的过程
- when
  - 触发测试动作
- then
  - 验证

所有的测试都可以按照着3个步骤去写

现在你可以用我们刚刚学到的测试三部曲来分析分析上面的 add 测试，你能分清楚嘛？

#### 找到输入以及输出

那我们在测任何逻辑的时候，都需要先明确其输入以及输出，这样的话，你才知道 given 的时候我给什么数据

then 的时候我要验证什么

其实 given 就是对应了输入

而 then 就是对应了输出

以上面的 add 为例

参数 a ， b 就是其输入

return 的结果就是其输出

#### 明白测试断言

接着我们说说我们是如何验证结果的，大家先想想在平时的情况下是如何验证结果是正确的呢？

是不是我们需要把调用函数的值 console.log 出来，然后用眼睛看一看，接着自己在心里算一算，看看是否这个 console.log 出来的值和我期望的（也就是心里想的）是否一致，如果一致，那么你是不是就认为这个逻辑是正确的

那其实我们写单测就是把上面的过程给它程序化，那怎么验证呢？ 

如果让你现在想的话，那么你可能能想到  1 === 1 ？ 这样用程序来表达的形式

没错，这样就可以解决我们的问题，而 jest 给我们提供了全套的验证函数，称之为匹配器

那最简单的 

```js
1===1 -> expect(1).toBe(1)
```

[expect](https://jestjs.io/docs/en/expect)除了以上这个匹配器还有很多很多种，这个就需要你自己去发掘了

#### 使用 describe function 组织你的测试

如果我们想对一个功能写多个测试，但是又不想和别的功能混合在一起要怎么办？

这就涉及到 test 的组织问题了

而 jest 给我们提供了 describe 函数，方便我们组织测试

```js

describe("App.vue", () => {
  
  describe("a",()=>{
      test("test name", () => {
      	const app = createApp;
    	});
      test("test a", () => {
        const app = createApp;
      });
  })

   describe("b",()=>{
      test("test name", () => {
      	const app = createApp;
    	});
      test("test a", () => {
        const app = createApp;
      });
  })
  
});

```

#### 避免假测试

在写测试的时候一定要有断言，不然你在测试什么呢？

比如我这么写

```js
test("add",() => {
  // 测试三部曲
  // given -> add
  // when -> 1，1
  // then -> result
  const result = add(1, 1);
});
```

这个测试运行的时候是会通过的，但是它有价值吗？一点没有，它根本就没有验证任何东西



在看另外一种情况

```js
test("add", () => {
  const result = add(1, 1);
  setTimeout(() => {
    expect(result).toBe(3);
  }, 1000);
});
```

运行测试，也会通过，但是它肯定是不能等于 3 的，如果断言在异步内的话，那么这个就变成了永远不会执行到的断言，换句话说就是毫无意义

> 如何测试异步逻辑，我们后面会讲到

以上着两种情况是最最常见的假测试的案例，我们一定要避免

#### 测试一个组件

那我们现在已经知道如何给一个函数写测试了，那么如果我们想给一个组件写测试的话，那要怎么办呢？

先别管三七二十一，我先写个 .vue 文件

创建一个 App.vue

```js
// App.vue
<template>
  <div>nihao</div>
</template>
```

然后创建对应的测试文件

```js
import App from "../App.vue";

describe("App.vue", () => {
  test("test name", () => {
    // vtu - vue - test- utils
    const app = createApp;
  });
});
```

注意哦，这里的测试和上面的是有几点不同

- 我们是通过 esm 的形式导入的 App.vue 
- 我们导入的是一个 SFC 文件，不是普通的 js 文件



#### 引入 babel-jest



如果我们现在运行测试的时候，你会发现如下报错

```js
FAIL  __tests__/app.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/en/ecmascript-modules for how to enable it.
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/cxr/Work/project/course-vue3-test/chapters/two/demo1/__tests__/app.test.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import App from "../App.vue";
                                                                                             ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1350:14)
```

这说明 jest 连编译都过不去，那这是为什么呢？

这里要简单的说一下，jest 是跑在 nodejs 坏境下的。

所以大家能理解为什么它理解不了 esm 的 import 了吧？因为 nodejs 坏境下并不支持 esm ！！！

着就是编译失败的原因所在，那我们应该怎么解决这个问题的？

一般我们要处理这种编译代码的工作是需要找 babel 老哥帮忙的，babel 老哥就是专门做这件事的

那怎么让 jest 和 babel 结合起来呢？

着就要请出我们的 babel-jest ，看名字的话，我们就应该知道它就是 jest 和 babel 结合起来的关键了

那我们应该怎么使用呢？

这还是的回到 jest.config.json 文件内，添加一下代码

```json
  transform: {
     "^.+\\.jsx?$": "babel-jest"
  }
```

着就相当于告诉 jest ，如果你碰到是 .js或者是 jsx 结尾的文件，那么你就需要使用 babel-jest 这个插件

当然只配置完这个东西还不行，我们还需要告诉 babel 老哥需要怎么处理 js 文件，所以我们在创建 babel.config.js 文件

```json
// babel.config.js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};

```

这里 preset-env 是官方提供好的预设，不用管，重点说说后面为什么要配置 targets ，在前面我们也说到了。jest 是走的 nodejs 坏境，所以我们要把我们的 js 都编译成 nodejs 坏境下能跑起来的样子，所以这个 targets.node 就是为了描述这件事的，就是要告诉 babel 你给我编译到 node 坏境，以及后面的 current 就是以你当前的 nodejs 版本为基础进行转换

这里是官方详细的 api 描述 [targetsnode](https://babel.docschina.org/docs/en/babel-preset-env#targetsnode)

接着我们就需要安装上述的依赖了：

- babel-jest
- @babel/preset-env

```shell
 npm i babel-jest @babel/preset-env -D       
```

接着执行测试 npm t



#### 引入 vue-jest

你会发现刚刚的那个错误已经没有了，但是又跳出了新的错误

> 不得不吐槽一下，前端的工程化配置是越来越难了，你需要了解多个库，还需要了解多个库之间如何配合起来，涉及了好多中间的插件

```js
 FAIL  __tests__/app.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/en/ecmascript-modules for how to enable it.
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/cxr/Work/project/course-vue3-test/chapters/two/demo1/App.vue:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){<template>
                                                                                             ^

    SyntaxError: Unexpected token '<'

    > 1 | import App from "../App.vue";
        | ^
      2 | 
      3 | describe("App.vue", () => {
      4 |   test("test name", () => {

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1350:14)
      at Object.<anonymous> (__tests__/app.test.js:1:1)
```

那这个问题是怎么造成的呢？

可以看到一个明显的报错就是 

```js
 SyntaxError: Unexpected token '<'
```

说明什么？说明语法不认识呀，那我们想一想看肯定是不认识 .vue 的语法，因为着是 vue 自己搞出来的文件嘛  SFC

那我们就得想办法让 jest 可以理解 .vue 文件。所以其实和上面的道理一样，我们还要配置一个 transform ，专门去解析 .vue 文件

打开你的 jest.config.js 添加一下配置

```js
transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.jsx?$": "babel-jest",
}
```

没错，就是告诉 jest 如果遇到是 .vue 结尾的文件你给我用 vue-jest 来解析一下

好，基于这个节奏的话，那么我们是不是应该愉快的安装 vue-jest 插件了呢？ 

如果你执行 npm i vue-jest 的话，那么你安装的是这样的，打开你的 package.json 文件

```js
 "devDependencies": {
    "vue-jest": "^3.0.7"
  },
```

看起来挺好对吧。别忘记我们是要给 vue3 组件写测试。

执行测试，看输出

```js
Test suite failed to run

    Cannot find module 'vue-template-compiler'
```

它告诉你找不到 vue-template-compiler ，别着急 ，我们先听话一下，跟着这个提示走，它说没有那么我们就给它安装一下

执行

```js
npm i vue-template-compiler
```

然后当你再次执行测试的时候，你就懵逼了

```js
● Test suite failed to run



    Vue packages version mismatch:

    - vue@3.0.2 (/Users/cxr/Work/project/course-vue3-test/chapters/two/demo1/node_modules/vue/index.js)
    - vue-template-compiler@2.6.12 (/Users/cxr/Work/project/course-vue3-test/chapters/two/demo1/node_modules/vue-template-compiler/package.json)

    This may cause things to work incorrectly. Make sure to use the same version for both.
    If you are using vue-loader@>=10.0, simply update vue-template-compiler.
    If you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.

      at Object.<anonymous> (node_modules/vue-template-compiler/index.js:10:9)
      at Object.<anonymous> (node_modules/vue-jest/lib/process.js:1:21)
```

它告诉你，不好意思这个 vue-loader 版本不匹配，整不了 vue3

那怎么办呢？

我们需要回到安装 vue-jest 的那一步，这里在告诉大家一点，当前的 vue 坏境下的所有默认安装还都是之前的 vue2 的版本，如果你需要安装支持vue3的库的话，那么一般需要装最新版

那怎么去安装最新版支持 vue3 呢？

我们先打开 vue-jest 的 [repo](https://github.com/vuejs/vue-jest) ，看它的分支的话，你会发现 next 分支，没错 着才是最新的支持 vue3 的版本，

而我们就需要安装它，这里说一下规律，一般情况下 vue 生态库都会存在一个 next 分支，或者是一个 next repo，比如 vut-test-uitls-next

好，我们来安装一下最新的版本吧 ，对于 vue-jest 来讲，就是 [v5.0.0-alpha.5](https://github.com/vuejs/vue-jest/releases/tag/v5.0.0-alpha.5)

```js
npm uninstall vue-jest &&  npm i vue-jest@v5.0.0-alpha.5
```

后面的 @ 就是告诉 npm 应该安装什么版本

完事之后，再次执行测试，这时候告诉我们需要安装 @vue/compiler-sfc

这次就对了。这个 @vue/compiler-sfc 是 vue-next 库里面专门解析 sfc 的

我们安装它即可

```js
 npm i @vue/compiler-sfc -D      
```

好了，着时候在执行测试的时候，就一切都ok了

```js
  ● Console

    console.log
      { render: [Function: render] }

      at Object.<anonymous> (__tests__/app.test.js:7:13)
```

以上就是配置 jest 支持 vue3 组件的过程了



#### 使用 vue-test-utils-next

但是我们这里导入进来的 App 只是一个通过 @vue/compiler-sfc 编译后的样子，它并不是一个组件的实例，我们需要实例化它，这样才能获取到一点我们关心的东西。

但是实例化这个组件在 vue3 里面是个比较麻烦的事，索性 vue 给我们提供了测试工具库，这个库就是 vue-test-unit-next，我们可以用这个库来帮助我们快速高效的完成对组件的测试，它给我们提供了很多测试方法

我们来体验体验，老规矩 先安装

```shell
npm i @vue/test-utils@next --save-dev
```

然后添加一下代码

```js
import App from "../App.vue";
import { mount } from "@vue/test-utils";

describe("App.vue", () => {
  test("test name", () => {
    const wrapper = mount(App);
    console.log(wrapper.text());
  });
});

```

```
  ● Console

    console.log
      nihao

      at Object.<anonymous> (__tests__/app.test.js:9:13)
```

这样的话，我们就把 App.vue 内的 text 打印出来，从而可以进行断言测试



有没有感觉到前端配置已经复杂到一定的程度了，并且新手是特别容易迷路的，而且其中有一点变动的话，我们前面积累的经验就废掉了。那能不能让这个过程简单点呢？

有的，vue-cli 就把整个配置的过程给封装起来了，那我们就来体验体验

## 介绍 vue-test-utils

## 调试测试

## 总结

