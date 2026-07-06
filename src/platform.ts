// @ts-nocheck
const platform = { value: null as null | undefined | { mp: unknown; name: string; } };

function isRequestExists(mp: { request?: Function }): boolean {
    return !!mp && typeof mp === "object" && typeof mp?.["request"] === "function";
}

export function getPlatform(): NonNullable<typeof platform.value> | undefined {
    if (platform.value !== null) return platform.value;
    const u = "undefined";

    platform.value =
        (typeof wx !== u && isRequestExists(wx) && { mp: wx, name: "WeChat" }) ||                                                   // 微信
        (typeof my !== u && isRequestExists(my) && { mp: my, name: "Alipay" }) ||                                                   // 支付宝
        (typeof qq !== u && isRequestExists(qq) && { mp: qq, name: "QQ" }) ||                                                       // QQ
        (typeof jd !== u && isRequestExists(jd) && { mp: jd, name: "JD" }) ||                                                       // 京东
        (typeof swan !== u && isRequestExists(swan) && { mp: swan, name: "Baidu" }) ||                                              // 百度
        (typeof tt !== u && isRequestExists(tt) && { mp: tt, name: "ByteDance" }) ||                                                // 抖音 | 飞书
        (typeof ks !== u && isRequestExists(ks) && { mp: ks, name: "Kwai" }) ||                                                     // 快手
        (typeof qh !== u && isRequestExists(qh) && { mp: qh, name: "Qihu" }) ||                                                     // 360
        (typeof xhs !== u && isRequestExists(xhs) && { mp: xhs, name: "RedNote" }) ||                                               // 小红书
        (typeof dd !== u && (isRequestExists(dd) || typeof dd?.["httpRequest"] === "function") && { mp: dd, name: "DingTalk" }) ||  // 钉钉
        (typeof bl !== u && isRequestExists(bl) && { mp: bl, name: "BiliBili" }) ||                                                 // 哔哩哔哩
        (typeof ft !== u && isRequestExists(ft) && { mp: ft, name: "FinClip" }) ||                                                  // 泰坪
        (typeof has !== u && isRequestExists(has) && { mp: has, name: "HarmonyASCF" }) ||                                           // 鸿蒙元服务
        (typeof uni !== u && isRequestExists(uni) && { mp: uni, name: "UniApp" }) ||                                                // UniApp
        (typeof Taro !== u && isRequestExists(Taro) && { mp: Taro, name: "Taro" }) ||                                               // Taro
        undefined;

    return platform.value!;
}
