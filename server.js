import Express from 'express'
import next from 'next'
import bodyParser from "body-parser";
import bodyParserXml from 'body-parser-xml';
bodyParserXml(bodyParser);

const dev = process.env.NODE_ENV !== 'production';
if (dev) {
    console.log(`next run on dev model ( process.env.NODE_ENV !== 'production') .....`);
} else {
    console.log(`next run on production build model .....`);
}

const app = next({ dev });
const handle = app.getRequestHandler();

const handleWithNextRouter = (req, res) => {
    console.dir('asdfasdfasdf')
    return handle(req, res)
}

let express = Express()

//创建微服务对象
export default ()=> {
    return new Promise(function (resolve, reject) {
        app.prepare()
            .then(async () => {

                /* next自身的动态链接，在后续的权限校验路由之前提前处理好 */
                express.all('/_next/*', handleWithNextRouter)

                express.use(function (req, res, next) {
                    console.log('express.use..............')
                    console.log(req.path)
                    next();
                })

                express.get("/test", function (req, res, next) {
                    console.log(req.path)
                    res.setHeader('content-type', 'text/html');
                    res.end('test123')
                })
                express.use(function (req, res, next) {
                    res.setHeader('content-type', 'text/html');
                    res.end('404~')
                })

                //进入默认的nextJS的路径解析，自动映射pages下的react组件化的js文件
                express.all('*', handleWithNextRouter)

                resolve(express)
            });
    })
}

