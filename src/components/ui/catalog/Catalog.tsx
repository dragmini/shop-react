import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import ProductItem from './product-item/ProductItem'

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
  // const {products} = products

	return (
		<section>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</section>
	)
}

export default Catalog
