import { IReview } from '@/types/review.interface'

import { instanse } from '@/api/api.interceptor'

import { IReviewCreate } from './review-create.interface'

const REVIEWS = '/reviews'

export const ReviewService = {
	async getAll() {
		return await instanse<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async create(productId: string | number, data: IReviewCreate) {
		return await instanse<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data
		})
	}
}
