export interface IProductType {
	name: string

	price: number

	description?: string

	images: string[]

	categoryId: number
}

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export interface IProductFilters {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}
