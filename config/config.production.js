export default {
    appName:'img.api',
    currentSiteUrl:"https://img.api.gankao.com",
    baseApi:{
        url:"https://base.api.gankao.com/service/getQiniuToken"
    },
    redis: {
        host: "10.9.193.140",
        port: 6379,
        password: 'gankao123poi',
        cache_prefx: 'prod_order_api_',
        defaultExpireSecond: 10 * 60
    }
}