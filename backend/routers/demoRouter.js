import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Demo from '../models/demoModel.js';
import { isAdmin, isAuth, isSellerOrAdmin } from '../utils.js';

const demoRouter = express.Router();

demoRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const demos = await Demo.find();
      res.send(demos);
    })
  );

  demoRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const titleId = req.params.id
      const demos = await Demo.findById(titleId);
      res.send(demos);
    })
  );

  demoRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const demo = new Demo({
        title:req.body.title,
        button1:req.body.button1,
        button2:req.body.button2,
        description:req.body.description,
        img:req.body.img
      });
      const createdDemo = await demo.save();
      res.send({ message: 'Title Created', demo: createdDemo });
    })
  );

  demoRouter.put(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const demoId = req.params.id;
      const demo = await Demo.findById(demoId);
      if (demo) {
            demo.title=req.body.title,
            demo.button1=req.body.button1,
            demo.button2=req.body.button2,
            demo.description=req.body.description,
            demo.img=req.body.img
            const updateddemo = await demo.save();
        res.send({ message: 'demo Updated', demo: updateddemo });
      } else {
        res.status(404).send({ message: 'demo Not Found' });
      }
    })
  );
  
  demoRouter.delete(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const demo = await Demo.findById(req.params.id);
      if (demo) {
        const deleteDemo = await demo.remove();
        res.send({ message: 'demo Deleted', demo: deleteDemo });
      } else {
        res.status(404).send({ message: 'demo Not Found' });
      }
    })
  );

  demoRouter.post(
    '/:id/analytic',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const demoId = req.params.id;
      const demo = await Demo.findById(demoId);
      if (demo) {
        const analytic = {
          counterb1: req.body.counterb1,
          counterb2: req.body.counterb2
        };
        demo.analytics.push(analytic);
        const updatedDemo = await demo.save();
        res.status(201).send({
          message: 'Analytic Created',
          analytic: updatedDemo.analytics[updatedDemo.analytics.length - 1],
        });
      } else {
        res.status(404).send({ message: 'Demo Not Found' });
      }
    })
  );

export default demoRouter;