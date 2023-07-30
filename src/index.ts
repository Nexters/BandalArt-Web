import koa from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import { configDotenv } from 'dotenv';
import { renderer } from './client/renderer';

configDotenv();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = new koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = renderer();
});

app.use(serve(__dirname + '/public'));
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
