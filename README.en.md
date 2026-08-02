# miniprogram-platform

A zero-dependency, lightweight platform detection utility for mini-program ecosystems. It abstracts platform-specific global variables (`wx`, `my`, `tt`, etc.) into a unified `{ mp, name }` interface, simplifying cross-platform library development.

## Installation

```bash
npm install miniprogram-platform
```

## Usage

```js
import { getPlatform } from "miniprogram-platform";

const { mp, name } = getPlatform() || {};

if (mp) {
    console.log(name); // "WeChat" | "Alipay" | "ByteDance" | ...
    mp.request({ url: "https://api.example.com/data" });
}
```

In TypeScript, you can cast `mp` to the target platform type for full type hints:

```ts
if (platform?.name === "WeChat") {
    const wx = platform.mp as typeof wx;
    wx.login({ ... });  // full type inference and autocompletion
}
```

In JavaScript, JSDoc achieves the same effect:

```js
if (platform?.name === "WeChat") {
    /** @type {typeof wx} */
    const wx = platform.mp;
    wx.login({ ... });  // type hints in VSCode as well
}
```

## API

### `getPlatform()`

Returns the platform info for the current runtime environment, or `undefined` if not running in a supported mini-program environment.

```ts
function getPlatform(): { mp: unknown; name: string } | undefined;
```

| Property | Type      | Description                                               |
| -------- | --------- | --------------------------------------------------------- |
| `mp`     | `unknown` | The platform's global API object (e.g., `wx`, `my`, `tt`) |
| `name`   | `string`  | Human-readable platform name                              |

## Supported Platforms

| Platform    | Global | Description                     |
| ----------- | ------ | ------------------------------- |
| WeChat      | `wx`   | WeChat Mini Program             |
| Alipay      | `my`   | Alipay Mini Program             |
| QQ          | `qq`   | QQ Mini Program                 |
| JD          | `jd`   | JD Mini Program                 |
| Baidu       | `swan` | Baidu Smart Mini Program        |
| ByteDance   | `tt`   | Douyin / Feishu Mini Program    |
| Kwai        | `ks`   | Kuaishou Mini Program           |
| Qihu        | `qh`   | 360 Mini Program                |
| RedNote     | `xhs`  | Xiaohongshu (RED) Mini Program  |
| DingTalk    | `dd`   | DingTalk Mini Program           |
| BiliBili    | `bl`   | Bilibili Mini Program           |
| FinClip     | `ft`   | FinClip Mini Program            |
| HarmonyASCF | `has`  | HarmonyOS Atomic Service        |
| UniApp      | `uni`  | UniApp cross-platform framework |
| Taro        | `Taro` | Taro cross-platform framework   |

Detection logic: checks each platform's global object in order, verifying that it has a `request` method. Returns on the first match, or `undefined` if none match.

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
