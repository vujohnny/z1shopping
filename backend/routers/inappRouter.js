import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import fetch from 'node-fetch';
import HttpsProxyAgent from 'https-proxy-agent';
const inappRouter = express.Router();

inappRouter.get(
    '/getMessages',
    expressAsyncHandler(async (req, res) => {
      fetch('https://api.iterable.com/api/inApp/getMessages?email=dt@iterable.com&count=100', {
      method: 'GET',
      //body: JSON.stringify(req.body),
      headers: { }
        })
        .then(res => res.json())
          .then(json => {
            console.log(json)
            console.log(JSON.stringify(json))
            res.send(json);
          })
          .catch(err => console.log(err))
            })
  );

  inappRouter.get(
    '/getMessages2',
    expressAsyncHandler(async (req, res) => {
      fetch('http://54.212.26.219:5000/api/demo', {
      method: 'GET',
      //body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(json => {
            console.log(json)
            console.log(JSON.stringify(json))
            res.send(json);
          })
          .catch(err => console.log(err))
            })
  );


  inappRouter.get(
    '/getMessages3',
    (async (req, res) => {
      try{
      const proxyAgent = new HttpsProxyAgent('http://54.212.26.219:5000');
      const response = await fetch('https://httpbin.org/ip?json', { agent: proxyAgent});
      const body = await response.text();
      console.log(body);
      }catch (error) {
        res.status(400).json({message: `${error}`});
      }
  })
  );

  inappRouter.get(
    '/getMessages4',
    (async () => {
      const proxyAgent = new HttpsProxyAgent('http://54.212.26.219:5000');
      const response = await fetch('https://httpbin.org/ip?json', { agent: proxyAgent});
      const body = await response.text();
      console.log(body);
  })
  );


  export default inappRouter;