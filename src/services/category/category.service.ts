import { ICategory } from '@/types/category.interface'

import { instanse } from '@/api/api.interceptor'

const CATEGORIES = '/categories'

export const CategoryService = {
	async getAll() {
		return await instanse<ICategory[]>({
			url: CATEGORIES,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return await instanse<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return await instanse<ICategory>({
			url: `${CATEGORIES}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instanse<ICategory>({
			url: CATEGORIES,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return await instanse<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return await instanse<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET'
		})
	}
}
