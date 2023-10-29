import koa from 'koa';
import serve from 'koa-static';
import logger from 'koa-logger';
import { userAgent } from 'koa-useragent';
import { configDotenv } from 'dotenv';
import viewRouter, { fallback } from './server/route/viewRoute';

configDotenv();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = new koa();

app.use(logger());

app.use(userAgent);
app.use(viewRouter.routes()).use(viewRouter.allowedMethods());
app.use(
  serve(__dirname + '/public', {
    maxAge: 24 * 60 * 60,
  }),
);

app.use(fallback);

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
  console.log(`Quick link -> http://${HOST}:${PORT}/share/Ha63U`);
});
