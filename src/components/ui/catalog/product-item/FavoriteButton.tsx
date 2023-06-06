import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'

import { UserService } from '@/services/user/user.service'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()

	if (!profile) return null

	const { invalidateQueries } = useQueryClient()

	const { mutate } = useMutation(
		['toggle favotite'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess() {
				invalidateQueries(['get profile'])
			}
		}
	)

	const isExists = profile.favorites.some(favorite => favorite.id === productId)

	return (
		<div>
			<button onClick={() => mutate()}>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
