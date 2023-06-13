import { FC } from 'react'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

const AddToCardButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCard, removeFromCard } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		(cartItem: any) => cartItem.product.id === product.id
	)

	return (
		<div>
			<button
				className='bg-white p-2 rounded-lg border border-black'
				onClick={() =>
					currentElement
						? removeFromCard({ id: currentElement.id })
						: addToCard({ product, quantity: 1, price: product.price })
				}
			>
				{currentElement ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
			</button>
		</div>
	)
}

export default AddToCardButton
