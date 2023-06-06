import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useActions } from '@/hooks/useActions'
import { useCard } from '@/hooks/useCard'

import { IProduct } from '@/types/product.interface'

const AddToCardButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCard, removeFromCard } = useActions()
	const { items } = useCard()

	const currentElement = items.find(
		(cardItem: any) => cardItem.product.id === product.id
	)

	return (
		<div>
			<button
				onClick={() =>
					currentElement
						? removeFromCard({ id: currentElement.id })
						: addToCard({ product, quantity: 1, price: product.price })
				}
			>
				{currentElement ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default AddToCardButton
