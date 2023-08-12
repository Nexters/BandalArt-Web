import { apiClient } from '../ApiClient';
import { BandalartCell, BandalartCellSchema } from '../../types/BandalartCell';

export const getSharedBandalartCells = async (
  key: string,
): Promise<BandalartCell> => {
  const response = await apiClient().get(`/v1/shares/${key}/bandalarts/cells`);
  return BandalartCellSchema.parse(response.data);
};
