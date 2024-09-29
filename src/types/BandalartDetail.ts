import { z } from 'zod';

export const BandalartDetailSchema = z.object({
  key: z.string({ description: '반다라트 표의 키' }),
  cellKey: z.string({ description: '메인 셀의 키' }),
  isCompleted: z.boolean({ description: '달성 여부' }),
  mainColor: z.string(),
  subColor: z.string(),
  title: z.string({ description: '반다라트 표의 제목' }).nullable(),
  profileEmoji: z.string().nullable(),
  dueDate: z
    .string({ description: '달성 목표일' })
    .datetime({ offset: true })
    .nullable(),
});
export type BandalartDetail = z.infer<typeof BandalartDetailSchema>;

export const mockDetail: BandalartDetail = {
  key: '123',
  cellKey: '1',
  isCompleted: false,
  mainColor: '#3fffba',
  subColor: '#111827',
  title: '발전하는 예진',
  profileEmoji: '🔥',
  dueDate: new Date('2025/1/1').toString(),
};
