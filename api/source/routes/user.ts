import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.post('/newOrder', controller.newOrder);

router.get('/getAllOrders', controller.getAllOrders);

router.get('/shippingMethods', controller.shippingMethods);

export = router;
