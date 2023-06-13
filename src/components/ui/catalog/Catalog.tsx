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
		<section className=' overflow-y-auto catalog'>
			{title && <Heading className='mb-5'>{title}</Heading>}
			{/* {isPagination && <SortDropdown />} */}
			<div className='grid grid-cols-4 gap-10'>
				{products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
			{/* {isPagination && <Button variant='orange'>Load More</Button>} */}
		</section>
	)
}

export default Catalog
