export const WrapReqRes = (app, request, response)=>{
    // 通过 app.request 和 app.response 创建 inComimgMessage 和serverResponse
    let inComimgMessage = Object.create(app.request, {
        path: {
            value: request.path,
            writable: true
        }
    });
    let serverResponse = Object.create(app.response);

    // 将 request 的部分信息赋值给 inComimgMessage
    inComimgMessage.headers = request.headers;
    inComimgMessage.method = request.method;
    inComimgMessage.path = request.path;
    inComimgMessage.url = request.path;
    inComimgMessage.query = request.queries;

    // 使用 response 的方法替换掉 serverResponse 的一些方法
    serverResponse.setHeader = (key, value) => response.setHeader(key, value);
    serverResponse.end = (data, encoding, callback) => {
        response.send(data);
    };
    serverResponse.send = serverResponse.end;

    serverResponse.status = (code) => {
        response.setStatusCode(code);
    };

    serverResponse.writeHead = (code, message, headers) => {
        response.setStatusCode(code);
    };

    serverResponse.sendStatus = (code) => {
        response.setStatusCode(code);
        response.send(code);
    };

    serverResponse.json = (body) => {
        response.setHeader('content-type', 'application/json');
        if (typeof body === 'string') {
            response.send(body);
        } else {
            response.send(JSON.parse(body));
        }
    };

    return [inComimgMessage, serverResponse]
}