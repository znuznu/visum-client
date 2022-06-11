import { z } from 'zod';

export interface Page<T> {
  current: number;
  size: number;
  totalElements: number;
  content: T[];
  totalPages: number;
  first: boolean;
  last: boolean;
}

export function getPageSchema<T extends z.ZodType>(contentSchema: T) {
  return z.object({
    current: z.number(),
    size: z.number(),
    totalElements: z.number(),
    totalPages: z.number(),
    first: z.boolean(),
    last: z.boolean(),
    content: z.array(contentSchema)
  });
}
