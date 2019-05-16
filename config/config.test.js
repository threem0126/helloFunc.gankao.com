export default {
    appName: 'img-test.api',
    currentSiteUrl:"https://img-test.api.gankao.com",
    baseApi:{
        url:"https://base.api.gankao.com/service/getQiniuToken"
    },
    redis: {
        host: "10.19.97.158",
        port: 6379,
        cache_prefx: 'test_order_api_',
        defaultExpireSecond: 10 * 60
    }
}