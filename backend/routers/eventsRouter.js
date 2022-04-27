import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import fetch from 'node-fetch';
import axios from 'axios';
const eventsRouter = express.Router();

const data = {
  email: "test@test.com",
  messageId: "74Rad6BwPIpu56WDRIDueu64x8WNhDjgVu70b0jJnd",
  deviceInfo: {
    deviceId: "111",
    platform: "OTT",
  appPackageName: "omniCG"
  }
}


  eventsRouter.post(
    '/trackInAppDelivery',
    expressAsyncHandler(async (req, res) => {
        try{
            const response=await axios.post('https://api.iterable.com/api/events'+req.url, req.body,{headers: {'api-key': req.headers['api-key']}}
        )
            res.status(200).json(response.data);
        }
        
        catch(err) {
            console.error(err);
            res.json(err);
        
        };
            })
  );

  eventsRouter.post(
    '/trackInAppDelivery',
    expressAsyncHandler(async (req, res) => {
      fetch('https://httpbin.org/post', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: req.headers
        }).then(res => res.json())
          .then(json => {
            console.log(json)
            res.send(json);
          })
          .catch(err => console.log(err))
            })
  );

  eventsRouter.post(
    '/trackInAppOpen',
    expressAsyncHandler(async (req, res) => {
      fetch('https://api.iterable.com/api/events/trackInAppDelivery', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: req.headers
        }).then(res => res.json())
          .then(json => {
            console.log(json)
            res.send(json);
          })
          .catch(err => console.log(err))
            })
  );

  eventsRouter.post(
    '/trackInAppClick',
    expressAsyncHandler(async (req, res) => {
      fetch('http://54.212.26.219:5000/api/demo/623c0da3b4b34eef2e91374b/analytic', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: req.headers
        }).then(res => res.json())
          .then(json => {
            console.log(json)
            res.send(json);
          })
          .catch(err => console.log(err))
            })
  );


  eventsRouter.post(
    '/trackInAppClose',
    expressAsyncHandler(async (req, res) => {
      fetch('http://54.212.26.219:5000/api/demo/623c0da3b4b34eef2e91374b/analytic', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: req.headers
        }).then(res => res.json())
          .then(json => {
            console.log(json)
            res.send(json);
          })
          .catch(err => console.log(err))
            })
  );


  eventsRouter.post(
    '/inAppConsume',
    expressAsyncHandler(async (req, res) => {
      fetch('http://54.212.26.219:5000/api/demo/623c0da3b4b34eef2e91374b/analytic', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: req.headers
        }).then(res => res.json())
          .then(json => {
            console.log(json)
            res.send(json);
          })
          .catch(err => console.log(err))
            })
  );


  export default eventsRouter;