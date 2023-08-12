import Router from '@koa/router';
import { getSharedBandalartDetailByKey } from '../../agent/shares/getSharedBandalartDetailByKey';
import { getSharedBandalartCells } from '../../agent/shares/getSharedBandalartCells';
import { renderer, renderExpired, renderNotFound } from '../../client/renderer';
import { createStore } from '../../client/stores/createStore';
import { initApiClient } from '../../agent/ApiClient';
import { Context } from 'koa';
import { isAxiosError } from 'axios';

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
      isMobile: ctx.userAgent.isMobile,
    });
  } catch (e) {
    console.error(e);
    if (isAxiosError(e) && e.response) {
      switch (e.response.status) {
        case 400:
          ctx.response.body = renderExpired(process.env.ASSET_PATH ?? '');
          break;
        case 404:
          ctx.response.body = renderNotFound(process.env.ASSET_PATH ?? '');
          break;
      }
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
