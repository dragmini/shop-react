import { IReview } from '@/types/review.interface'

import { axiosClassic, instanse } from '@/api/api.interceptor'

import { IReviewCreate } from './review-create.interface'

const REVIEWS = '/reviews'

export const ReviewService = {
	async getAll() {
		return await axiosClassic<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async getAverageByProduct(productId: string | number) {
		return await axiosClassic<number>({
			url: `${REVIEWS}/average-by-product/${productId}`,
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
