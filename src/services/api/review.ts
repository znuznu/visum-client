import { z } from 'zod';

import { PromiseReviewSchema, Review } from 'models/reviews';

import HttpService from 'services/http';

import { API_URL } from 'config';

export interface CreateReviewRequest {
  grade: number;
  content: string;
  movieId: number;
}

const CreateReviewResponseSchema = z.object({
  id: z.number(),
  grade: z.number(),
  content: z.string(),
  movieId: z.number()
});
const PromiseCreateReviewResponseSchema = z.promise(CreateReviewResponseSchema);
type CreateReviewResponse = z.infer<typeof CreateReviewResponseSchema>;

export interface UpdateReviewRequest {
  grade: number;
  content: string;
}

type UpdateReviewResponse = CreateReviewResponse;
const PromiseUpdateReviewResponse = PromiseCreateReviewResponseSchema;

export const createReview = async (
  headers: Record<string, string>,
  body: CreateReviewRequest
) => {
  return PromiseCreateReviewResponseSchema.parse(
    HttpService.post(`${API_URL}/api/reviews/movies`, {
      headers,
      json: body
    }).json<CreateReviewResponse>()
  );
};

export const updateReview = async (
  headers: Record<string, string>,
  body: UpdateReviewRequest,
  reviewId: number
): Promise<UpdateReviewResponse> => {
  return PromiseUpdateReviewResponse.parse(
    HttpService.put(`${API_URL}/api/reviews/${reviewId}/movies`, {
      headers,
      json: body
    }).json<UpdateReviewResponse>()
  );
};

// TODO There's currently no endpoint to get a Review by a movieId (2021/01/16)
// eslint-disable-next-line
export const fetchReview = async (
  headers: Record<string, string>,
  id: string
): Promise<Review> => {
  return PromiseReviewSchema.parse(
    HttpService.get(`${API_URL}/api/movies/${id}/reviews`, {
      headers
    }).json<Review>()
  );
};

export const deleteReview = async (
  headers: Record<string, string>,
  id: string
): Promise<void> => {
  return HttpService.delete(`${API_URL}/api/reviews/${id}/movies`, {
    headers
  }).json<void>();
};
