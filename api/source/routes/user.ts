import express from 'express';
import controller from '../controllers/user';

const router = express.Router();

router.post('/newOrder', controller.newOrder);

export = router;