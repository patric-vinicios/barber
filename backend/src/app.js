import express from 'express';
import path from 'path';
import * as Sentry from '@sentry/node';
import sentryConfig from './config/sentry';
import 'express-async-errors';
import routes from './routes';

import './database';

const app = express();

Sentry.init(sentryConfig);

app.use(Sentry.Handlebars.requestHandlebars)
app.use(express.json());
app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
)
app.use(routes);
app.use(Sentry.Handlers.errorHandler());

export default app;
