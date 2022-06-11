import { z } from 'zod';

export interface Pair<K, V> {
  key: K;
  value: V;
}

export function getPairSchema<K extends z.ZodTypeAny, V extends z.ZodTypeAny>(
  keySchema: K,
  valueSchema: V
) {
  return z.object({
    key: keySchema,
    value: valueSchema
  });
}

z.array(getPairSchema(z.number(), z.string()));
