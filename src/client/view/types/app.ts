import { Platform } from '../../../server/types/platform';

export type AppProps = {
  assetPath: string;
  isMobile: boolean;
  appDownloadUrl: string;
  platform: Platform;
};
