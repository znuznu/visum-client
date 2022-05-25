import { API_URL } from 'config';
import { Review } from 'models/reviews';
import HttpService from 'services/http';

export interface CreateReviewRequestBody {
  grade: number;
  content: string;
  movieId: number;
}

export interface CreateReviewResponseBody {
  id: number;
  grade: number;
  content: string;
  movieId: number;
}

export interface UpdateReviewRequestBody {
  grade: number;
  content: string;
}

export interface UpdateReviewResponseBody extends CreateReviewResponseBody {}

export const createReview = async (
  headers: Record<string, string>,
  body: CreateReviewRequestBody
) => {
  return HttpService.post(`${API_URL}/api/reviews/movies`, {
    headers,
    json: body
  }).json<CreateReviewResponseBody>();
};

export const updateReview = async (
  headers: Record<string, string>,
  body: UpdateReviewRequestBody,
  reviewId: number
): Promise<UpdateReviewResponseBody> => {
  return HttpService.put(`${API_URL}/api/reviews/${reviewId}/movies`, {
    headers,
    json: body
  }).json<UpdateReviewResponseBody>();
};

// TODO There's currently no endpoint to get a Review by a movieId (2021/01/16)
// eslint-disable-next-line
export const fetchReview = async (
  headers: Record<string, string>,
  id: string
): Promise<Review> => {
  return HttpService.get(`${API_URL}/api/movies/${id}/reviews`, {
    headers
  }).json<Review>();
};

export const deleteReview = async (
  headers: Record<string, string>,
  id: string
): Promise<void> => {
  return HttpService.delete(`${API_URL}/api/reviews/${id}/movies`, {
    headers
  }).json<void>();
};
