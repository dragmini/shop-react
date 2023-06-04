import { IUser } from '@/types/user.interface'

export interface IReview {
	id: number
	rating: string
	text: string
	createAt: string
	user: IUser
}
