import { apiClient } from '../ApiClient';
import {
  BandalartDetail,
  BandalartDetailSchema,
} from '../../types/BandalartDetail';

export const getBandalartDetailByKey = async (
  key: string,
): Promise<BandalartDetail> => {
  const response = await apiClient().get(`/v1/bandalarts/${key}`);
  return BandalartDetailSchema.parse(response.data);
};
