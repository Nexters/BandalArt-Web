import koa from 'koa';
import Router from '@koa/router';
import { configDotenv } from 'dotenv';

configDotenv();

const PORT = process.env.PORT || 8888;
const HOST = process.env.HOST || 'localhost';

const app = new koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = 'hi there!!!!!!';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
