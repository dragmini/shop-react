import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { useProduct } from '@/hooks/useProduct'

import { IProduct } from '@/types/product.interface'

import Product from '@/screens/product/Product'
import { ProductService } from '@/services/product/product.service'

// export async function getServerSideProps(context: any) {
// 	const { slug } = await context.query

// 	// Make a request for the product with the specified ID
// 	const product = useProduct(slug)

// 	// Get the response as JSONconst product = await res.json()

// 	return {
// 		props: {
// 			product
// 		}
// 	}
// }

const ProductPage: FC = () => {
	const { query } = useRouter()
	if (!query.slug) return null

	const [product, setProduct] = useState<IProduct>()

	const getProduct = async () => {
		const { data } = await ProductService.getBySlug(query.slug as string)
		setProduct(data)
	}

	useEffect(() => {
		getProduct()
	}, [query.slug])

	return product ? <Product product={product} /> : null
}

export default ProductPage
