import { useQuery } from '@tanstack/react-query'
import { error } from 'console'

import { IUser, IUserFull } from '@/types/user.interface'

import { errorCatch } from '@/api/api.helper'

import { useAuth } from './useAuth'
import { UserService } from '@/services/user/user.service'

export const useProfile = () => {
	const { user } = useAuth()

	const { data } = useQuery(['get profile'], () => UserService.getProfile(), {
		select: ({ data }) => data,
		onError: error => {
			console.log(errorCatch(error))
		},
		enabled: !!user
	})

	return { profile: data }
}
