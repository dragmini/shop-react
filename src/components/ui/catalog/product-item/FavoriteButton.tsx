import { FC } from 'react'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	return <div>{productId}</div>
}

export default FavoriteButton
