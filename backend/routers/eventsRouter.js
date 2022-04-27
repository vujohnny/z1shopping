import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import fetch from 'node-fetch';
const eventsRouter = express.Router();

  eventsRouter.post(
    '/trackInAppDelivery',
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
    '/trackInAppOpen',
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