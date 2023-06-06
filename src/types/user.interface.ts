import { IOrder } from './order.interface'
import { IProduct } from './product.interface'

export interface IUser {
	id: number
	email: string
	name: string
	avatarPath: string
	password: string
	phone: string
}

export interface IUserFull extends IUser {
	favorites: IProduct[]
	// orders: IOrder[]
}
