import { z } from 'zod';

// because of a limitation of TypeScript, type can't be statically inferred
export type BandalartCell = z.infer<typeof BaseBandalartCellSchema> & {
  children: BandalartCell[];
};
const BaseBandalartCellSchema = z.object({
  key: z.string({ description: '반다라트 셀의 키' }),
  isCompleted: z.boolean({ description: '달성 여부' }),
  completionRatio: z.number({ description: '달성률' }),
  dueDate: z
    .string({ description: '달성 목표일' })
    .datetime({ offset: true })
    .nullable(),
  title: z.string({ description: '목표 이름' }).nullable(),
  description: z.string({ description: '메모' }).nullable(),
  parentKey: z.string({ description: '부모 셀의 키' }).nullable(),
});
export const BandalartCellSchema: z.ZodType<BandalartCell> =
  BaseBandalartCellSchema.extend({
    children: z.lazy(() => z.array(BandalartCellSchema)),
  });
