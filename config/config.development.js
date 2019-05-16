export default {
    appName: 'img.api',
    currentSiteUrl:"http://local.gankao.com:8068",
    baseApi:{
        url:"https://base.api.gankao.com/service/getQiniuToken"
    },
    redis: {
        host: "localhost",
        port: 6379,
        cache_prefx: 'dev_order_api_',
        defaultExpireSecond: 10 * 60
    }
}