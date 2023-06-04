import { IProduct } from '@/types/product.interface'

export interface ICardItem {
	id: number
	product: IProduct
	quantity: number
	price: number
}
