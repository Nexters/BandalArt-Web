import { useContext } from 'react';
import { EnvContext } from '../context/EnvContext';

export const useShowAppDownloadBanner = () => {
  const { platform } = useContext(EnvContext);
  return ['android', 'ios'].includes(platform);
};
