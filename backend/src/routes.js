import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';

const routes = Router();
const upload = multer(multerConfig)

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index)

routes.post('/appointments', AppointmentController.store);
routes.get('/appointments', AppointmentController.index);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/schedule', ScheduleController.index);





module.exports = routes
