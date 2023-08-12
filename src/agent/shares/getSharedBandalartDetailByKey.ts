import { apiClient } from '../ApiClient';
import {
  BandalartDetail,
  BandalartDetailSchema,
} from '../../types/BandalartDetail';

export const getSharedBandalartDetailByKey = async (
  key: string,
): Promise<BandalartDetail> => {
  const response = await apiClient().get(`/v1/shares/${key}/bandalarts`);
  return BandalartDetailSchema.parse(response.data);
};
