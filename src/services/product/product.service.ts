import { IProduct } from '@/types/product.interface'

import { instanse } from '@/api/api.interceptor'

import { IProductFilters, IProductType } from './product.interface'

const PRODUCTS = '/products'

export const ProductService = {
	async getAll(queryData = {} as IProductFilters) {
		return await instanse<IProduct[]>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData
		})
	},

	async getSimilar(productId: string | number) {
		return await instanse<IProduct[]>({
			url: `${PRODUCTS}/similar/${productId}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return await instanse<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return await instanse<IProduct>({
			url: `${PRODUCTS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return await instanse<IProduct>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async create() {
		return await instanse<IProduct>({
			url: PRODUCTS,
			method: 'POST'
		})
	},

	async update(productId: number | string, data: IProductType) {
		return await instanse<IProduct>({
			url: `${PRODUCTS}/${productId}`,
			method: 'PUT',
			data
		})
	},

	async delete(productId: number | string) {
		return await instanse<IProduct>({
			url: `${PRODUCTS}/${productId}`,
			method: 'DELETE'
		})
	}
}
