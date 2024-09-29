import Router from '@koa/router';
import { getSharedBandalartDetailByKey } from '../../agent/shares/getSharedBandalartDetailByKey';
import { getSharedBandalartCells } from '../../agent/shares/getSharedBandalartCells';
import {
  renderer,
  renderError,
  renderExpired,
  renderNotFound,
} from '../../client/renderer';
import { createStore } from '../../client/stores/createStore';
import { initApiClient } from '../../agent/ApiClient';
import { Context } from 'koa';
import { isAxiosError } from 'axios';
import { AppProps } from '../../client/view/types/app';
import { Platform } from '../types/platform';
import { mockDetail } from '../../types/BandalartDetail';
import { mockBandalartCells } from '../../types/BandalartCell';

const viewRouter = new Router();

const createAppProps = ({
  isMobile,
  platform,
}: {
  isMobile: boolean;
  platform: Platform;
}): AppProps => ({
  assetPath: process.env.ASSET_PATH ?? '',
  appDownloadUrl: process.env.APP_DOWNLOAD_URL || '',
  platform,
  isMobile,
});

const getPlatform = (ctx: Context): Platform => {
  const ua = ctx.userAgent;
  if (ua.isMobile) {
    if (ua.isAndroid) {
      return 'android';
    } else if (ua.iPhone) {
      return 'ios';
    }
  }
  return 'desktop';
};

const getSharedBandalart = async (key: string) => {
  if (key === 'Ha63U') {
    return { detail: mockDetail, tree: mockBandalartCells };
  }

  const bandalartDetail = await getSharedBandalartDetailByKey(key);
  const bandalartCells = await getSharedBandalartCells(key);
  return { detail: bandalartDetail, tree: bandalartCells };
};

viewRouter.get('/share/:key', async (ctx) => {
  const appProps = createAppProps({
    isMobile: ctx.userAgent.isMobile,
    platform: getPlatform(ctx),
  });
  try {
    initApiClient();
    const key = ctx.params.key;

    const { detail, tree } = await getSharedBandalart(key);

    ctx.response.body = renderer({
      store: createStore({
        bandalartDetail: detail,
        bandalartTree: tree,
      }),
      ...appProps,
    });
  } catch (e) {
    console.error(e);
    if (isAxiosError(e) && e.response) {
      switch (e.response.status) {
        case 400:
          ctx.response.body = renderExpired(appProps);
          return;
        case 404:
          ctx.response.body = renderNotFound(appProps);
          return;
        default:
      }
    }
    ctx.response.body = renderError(appProps);
    return;
  }
});

viewRouter.get('/health', (ctx) => {
  ctx.response.body = 'ok';
});

export default viewRouter;
export const fallback = (ctx: Context) => {
  const isMobile = ctx.userAgent.isMobile;
  ctx.response.body = renderNotFound(
    createAppProps({ isMobile, platform: getPlatform(ctx) }),
  );
};
