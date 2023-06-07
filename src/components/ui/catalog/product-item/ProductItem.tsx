import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import AddToCardButton from './AddToCardButton'
import FavoriteButton from './FavoriteButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<div className='bg-white rounded-xl relative overflow-hidden'>
				<div className='absolute top-2 right-2 z-10'>
					<FavoriteButton productId={product.id} />
					<AddToCardButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						width={250}
						height={250}
						src={product.images[0]}
						alt={product.name}
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className='mb-1'>{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='text-aqua text-sm mb-2'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} />
			<div className='text-xl font-semibold'>{convertPrice(product.price)}</div>
		</div>
	)
}

export default ProductItem
