import { inject } from 'vue';

export function useConvexClient() {
  const client = inject('convex');
  if (!client) {
    throw new Error('Convex client not provided');
  }
  return { client };
}