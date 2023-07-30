import { z } from 'zod';

export const BandalartDetailSchema = z.object({
  key: z.string({ description: '반다라트 표의 키' }),
  title: z.string({ description: '반다라트 표의 제목' }),
  cellKey: z.string({ description: '메인 셀의 키' }),
  isCompleted: z.boolean({ description: '달성 여부' }),
  dueDate: z
    .string({ description: '달성 목표일' })
    .datetime({ offset: true })
    .nullable(),
  shareKey: z.string({ description: '공유 키' }).nullable(),
});
export type BandalartDetail = z.infer<typeof BandalartDetailSchema>;
