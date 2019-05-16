// import '@babel/polyfill';
// import http from 'http';
// import getRawBody from 'raw-body'
// import {keys} from 'lodash';
// import {WrapReqRes} from './fcUtils.js'
// import initExpressApp from './server.js'
//
// let global_initializer = false;
// let FCServer ;
// let expressApp;
//
// export const initializer = function(context, callback) {
//   console.log('initializing');
//   callback(null, '');
// };
//
// export const handler = async (request, response, context)=> {
//   console.log('hello world');
//   console.log(keys({a: "name", b: "age"}))
//   if (!global_initializer) {
//     console.log(`global_initializer ..... `)
//     expressApp = await initExpressApp()
//     FCServer = http.createServer(expressApp)
//     global_initializer = true;
//   }
//   try {
//     //
//     let [inComimgMessage, serverResponse] = WrapReqRes(expressApp, request, response);
//     getRawBody(request, function (err, body) {
//       if (request.method === 'POST')
//         inComimgMessage.body = JSON.parse(decodeURIComponent(body.toString()));
//       //
//       FCServer.emit('request', inComimgMessage, serverResponse);
//     });
//   } catch (e) {
//     console.error(e.stack);
//     response.send(JSON.stringify({request, response, context, e}));
//   }
// };


// import fs from 'fs';
// import path from 'path';
// import '@babel/polyfill';
import http from 'http';
import getRawBody from 'raw-body'
import {WrapReqRes} from './fcUtils.js'
import initSeverApp from './server.js'

let app ;
let FCServer ;

export const initializer =async function(context, callback) {
  console.log('initializing');
  app = await initSeverApp();
  FCServer = http.createServer(app)
  callback(null, '');
};

export const handler = async (request, response, context)=> {
  console.log('hello world');
  try {
    //
    let [inComimgMessage, serverResponse] = WrapReqRes(app, request, response);
    getRawBody(request, function (err, body) {
      if (request.method === 'POST')
        inComimgMessage.body = JSON.parse(decodeURIComponent(body.toString()));
      //
      FCServer.emit('request', inComimgMessage, serverResponse);
    });
  } catch (e) {
    console.error(e.stack);
    response.send(JSON.stringify({request, response, context, e}));
  }
};

