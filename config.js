export const config = {
    appName: 'img-test',
    apiUrl: 'http://local.gankao.com:8046'
}
const env_name = process.env.NODE_ENV||"development";
console.warn("loading config for  ..... " + env_name);

if(typeof window ==="object"){
    throw "警告：服务器端config配置无法被引入在客户端脚本中";
}
if(typeof global.__config_loaded === "undefined") {
    global.config_path = "../config/config." + env_name + ".js"
    global.__config_loaded = require(global.config_path).default;
}

export default global.__config_loaded;

