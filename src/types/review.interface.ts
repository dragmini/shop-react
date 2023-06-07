import { IUser } from '@/types/user.interface'

export interface IReview {
	id: number
	rating: number
	text: string
	createAt: string
	user: IUser
}
