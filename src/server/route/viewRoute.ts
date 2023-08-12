import Router from '@koa/router';
import { initApiClient } from '../../agent/ApiClient';
import { getSharedBandalartDetailByKey } from '../../agent/shares/getSharedBandalartDetailByKey';
import { getSharedBandalartCells } from '../../agent/shares/getSharedBandalartCells';
import { renderer, renderExpired, renderNotFound } from '../../client/renderer';
import { createStore } from '../../client/stores/createStore';
import { Context } from 'koa';

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.response.status === 400) {
      ctx.response.body = renderExpired(process.env.ASSET_PATH ?? '');
      return;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (e.response.status === 404) {
      ctx.response.body = renderNotFound(process.env.ASSET_PATH ?? '');
      return;
    }
  }
});

viewRouter.get('/health', (ctx) => {
  ctx.response.body = 'ok';
});

export default viewRouter;
export const fallback = (ctx: Context) => {
  ctx.response.body = renderNotFound(process.env.ASSET_PATH ?? '');
};
