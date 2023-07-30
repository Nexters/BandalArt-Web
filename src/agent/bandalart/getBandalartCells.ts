import { apiClient } from '../ApiClient';
import { BandalartCell, BandalartCellSchema } from '../../types/BandalartCell';

export const getBandalartCells = async (
  key: string,
): Promise<BandalartCell> => {
  const response = await apiClient().get(`/v1/bandalarts/${key}/cells`);
  return BandalartCellSchema.parse(response.data);
};
