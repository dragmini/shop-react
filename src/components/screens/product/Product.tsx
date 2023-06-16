import { FC } from 'react'

import Meta from '@/ui/Meta'
import Layout from '@/ui/layout/Layout'
import ProductCard from '@/ui/product/ProductCard'

import { IProduct } from '@/types/product.interface'

const Product: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<Meta title={product.name}>
			<Layout>
				<ProductCard product={product} />
			</Layout>
		</Meta>
	)
}

export default Product
