import { ICardItem } from './card.interface'
import { IUser } from './user.interface'

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

export interface IOrder {
	id: number
	createAt: string
	items: ICardItem[]
	state: EnumOrderStatus
	user: IUser
}
