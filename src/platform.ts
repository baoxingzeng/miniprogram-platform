// @ts-nocheck
const platform = { value: null as null | { mp: unknown; name: string; } };

export function getPlatform(): NonNullable<typeof platform.value> | undefined {
    if (platform.value !== null) return platform.value;
    const u = "undefined", f = "function", r = "request";

    platform.value =
        (typeof wx !== u && typeof wx?.[r] === f && wx && { mp: wx, name: "WeChat" }) ||            // 微信
        (typeof my !== u && typeof my?.[r] === f && my && { mp: my, name: "Alipay" }) ||            // 支付宝
        (typeof qq !== u && typeof qq?.[r] === f && qq && { mp: qq, name: "QQ" }) ||                // QQ
        (typeof jd !== u && typeof jd?.[r] === f && jd && { mp: jd, name: "JD" }) ||                // 京东
        (typeof swan !== u && typeof swan?.[r] === f && swan && { mp: swan, name: "Baidu" }) ||     // 百度
        (typeof tt !== u && typeof tt?.[r] === f && tt && { mp: tt, name: "ByteDance" }) ||         // 抖音 | 飞书
        (typeof ks !== u && typeof ks?.[r] === f && ks && { mp: ks, name: "Kwai" }) ||              // 快手
        (typeof qh !== u && typeof qh?.[r] === f && qh && { mp: qh, name: "Qihu" }) ||              // 360
        (typeof xhs !== u && typeof xhs?.[r] === f && xhs && { mp: xhs, name: "RedNote" }) ||       // 小红书
        (typeof uni !== u && typeof uni?.[r] === f && uni && { mp: uni, name: "UniApp" }) ||        // UniApp
        (typeof Taro !== u && typeof Taro?.[r] === f && Taro && { mp: Taro, name: "Taro" }) ||      // Taro
        undefined;

    return platform.value!;
}
