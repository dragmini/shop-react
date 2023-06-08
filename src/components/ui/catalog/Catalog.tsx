import { title } from 'process'
import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import Heading from '../Heading'

import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, title }) => {
	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<div className='grid grid-cols-4 gap-10'>
				{products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	)
}

export default Catalog
