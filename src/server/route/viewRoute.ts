import Router from '@koa/router';
import { initApiClient } from '../../agent/ApiClient';
import { getSharedBandalartDetailByKey } from '../../agent/shares/getSharedBandalartDetailByKey';
import { getSharedBandalartCells } from '../../agent/shares/getSharedBandalartCells';
import { renderer } from '../../client/renderer';
import { createStore } from '../../client/stores/createStore';

const viewRouter = new Router();

viewRouter.get('/share/:key', async (ctx) => {
  try {
    initApiClient();
    const key = ctx.params.key;
    const bandalartDetail = await getSharedBandalartDetailByKey(key);
    const bandalartCells = await getSharedBandalartCells(key);
    ctx.response.body = renderer({
      assetPath: process.env.ASSET_PATH ?? '',
      store: createStore({
        bandalartDetail: bandalartDetail,
        bandalartTree: bandalartCells,
      }),
    });
  } catch (e) {
    console.error(e);
  }
});

viewRouter.get('/health', (ctx) => {
  ctx.response.body = 'ok';
});

export default viewRouter;
