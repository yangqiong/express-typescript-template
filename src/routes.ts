import express from 'express';
import UserController from './controllers/UserController';

const router = express.Router();

router.get("/users", UserController.findAll);

export { router }