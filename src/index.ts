import koa from 'koa';
import serve from 'koa-static';
import { configDotenv } from 'dotenv';
import viewRouter from './server/route/viewRoute';

configDotenv();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = new koa();

app.use(viewRouter.routes()).use(viewRouter.allowedMethods());
app.use(serve(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
  console.log(`Quick link -> http://${HOST}:${PORT}/share/Ha63U`);
});
