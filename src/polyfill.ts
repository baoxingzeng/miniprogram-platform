export * from "./index";
import { getPlatform } from "./platform";

/* eslint-disable no-prototype-builtins */
const g: typeof globalThis =
    (typeof globalThis !== "undefined" && globalThis) ||
    (typeof window !== "undefined" && window) ||
    (typeof self !== "undefined" && self) ||
    // @ts-ignore eslint-disable-next-line no-undef
    (typeof global !== "undefined" && global) ||
    {};

// @ts-ignore
if (!g.mp) {
    let platform = getPlatform();
    if (platform) {
        // @ts-ignore
        g.mp = platform.mp;
    }
}
