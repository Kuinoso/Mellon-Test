import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.post('/newOrder', controller.newOrder);

router.get('/getOrder/:id', controller.getOrder);

export = router;