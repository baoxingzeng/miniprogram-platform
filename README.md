# miniprogram-platform

零依赖、极简的跨小程序平台检测工具。将各平台特有的全局变量（`wx`、`my`、`tt` 等）统一抽象为 `{ mp, name }`，方便跨小程序库的开发。

## 安装

```bash
npm install miniprogram-platform
```

## 使用

```js
import { getPlatform } from "miniprogram-platform";

const { mp, name } = getPlatform() || {};

if (mp) {
    console.log(name); // "WeChat" | "Alipay" | "ByteDance" | ...
    mp.request({ url: "https://api.example.com/data" });
}
```

> **注意**：`getPlatform()` 在首次调用时完成检测并缓存结果，后续调用均为 O(1)。

TypeScript 中可将 `mp` 断言为目标平台类型以获得完整的类型提示：

```ts
if (platform?.name === "WeChat") {
    const wx = platform.mp as typeof wx;
    wx.login({ ... });  // 完整的类型推断与补全
}
```

JavaScript 中可通过 JSDoc 达到同样效果：

```js
if (platform?.name === "WeChat") {
    /** @type {typeof wx} */
    const wx = platform.mp;
    wx.login({ ... });  // VSCode 中同样有类型提示
}
```

## API

### `getPlatform()`

返回当前运行环境的平台信息，若不在任何小程序环境中则返回 `undefined`。

```ts
function getPlatform(): { mp: unknown; name: string } | undefined;
```

| 属性   | 类型      | 说明                                        |
| ------ | --------- | ------------------------------------------- |
| `mp`   | `unknown` | 平台全局 API 对象（如 `wx`、`my`、`tt` 等） |
| `name` | `string`  | 平台名称                                    |

## 支持的平台

| 平台名称    | 全局对象 | 说明              |
| ----------- | -------- | ----------------- |
| WeChat      | `wx`     | 微信小程序        |
| Alipay      | `my`     | 支付宝小程序      |
| QQ          | `qq`     | QQ 小程序         |
| JD          | `jd`     | 京东小程序        |
| Baidu       | `swan`   | 百度智能小程序    |
| ByteDance   | `tt`     | 抖音 / 飞书小程序 |
| Kwai        | `ks`     | 快手小程序        |
| Qihu        | `qh`     | 360 小程序        |
| RedNote     | `xhs`    | 小红书小程序      |
| DingTalk    | `dd`     | 钉钉小程序        |
| BiliBili    | `bl`     | 哔哩哔哩小程序    |
| FinClip     | `ft`     | 泰坪小程序        |
| HarmonyASCF | `has`    | 鸿蒙元服务        |
| UniApp      | `uni`    | UniApp 跨端框架   |
| Taro        | `Taro`   | Taro 跨端框架     |

检测逻辑：按优先级依次检查各平台的全局对象是否存在，并验证该对象是否具有 `request` 方法（钉钉例外，其请求 API 为 `httpRequest`）。
匹配到第一个即返回，若全部未匹配则返回 `undefined`。

## License

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
