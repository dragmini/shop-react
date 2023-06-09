import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export interface IProduct {
	id: number
	name: string
	images: string[]
	description: string
	price: number
	createAt: string
	slug: string
	reviews: IReview[]
	category: ICategory
}

export interface IProductDetailts {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	products: IProduct[]
	length: number
}
