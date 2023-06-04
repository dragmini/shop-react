import { IUser } from '@/types/user.interface'

import { instanse } from '@/api/api.interceptor'

import { IProfileUpdate } from './profile-update.interface'

const USER = '/user'

export const UserService = {
	async getProfile() {
		return await instanse<IUser>({
			url: `${USER}/profile`,
			method: 'GET'
		})
	},

	async updateProfile(data: IProfileUpdate) {
		return await instanse<IUser>({
			url: `${USER}/profile`,
			method: 'PUT',
			data
		})
	},

	async toggleFavorite(productId: string | number) {
		return await instanse<IUser>({
			url: `${USER}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
