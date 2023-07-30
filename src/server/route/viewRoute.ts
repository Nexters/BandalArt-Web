import Router from '@koa/router';
import { initApiClient } from '../../agent/ApiClient';
import { getBandalartDetailByKey } from '../../agent/bandalart/getBandalartDetailByKey';
import { getBandalartCells } from '../../agent/bandalart/getBandalartCells';
import { renderer } from '../../client/renderer';
import { createStore } from '../../client/stores/createStore';

const viewRouter = new Router();

viewRouter.get('/share/:key', async (ctx) => {
  initApiClient();
  const key = ctx.params.key;
  const bandalartDetail = await getBandalartDetailByKey(key);
  const bandalartCells = await getBandalartCells(key);
  ctx.response.body = renderer({
    stylesheetUrl: process.env.STYLESHEET_URL ?? '',
    store: createStore({
      bandalartDetail: bandalartDetail,
      bandalartTree: bandalartCells,
    }),
  });
});

export default viewRouter;
