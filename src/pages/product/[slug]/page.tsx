// import { IPageSlugParam, TypeParamSlug } from '@/types/page-params'
import Product from '@components/ui/product/Product'
import { Metadata } from 'next'

// import ProductItem from '@/ui/catalog/product-item/ProductItem'
import { ProductService } from '@/services/product/product.service'

export const revalidate = 60

export async function generateStaticParams() {
	const response = await ProductService.getAll()

	const paths = response.products.map(product => {
		return {
			params: { slug: product.slug }
		}
	})

	return paths
}

// async function getProduct(params: any) {
// 	const product = await ProductService.getBySlug(params?.slug as string)

// 	const { data: similarProducts } = await ProductService.getSimilar(product.id)

// 	return {
// 		product,
// 		similarProducts
// 	}
// }

// export async function generateMetadata({
// 	params
// }: IPageSlugParam): Promise<Metadata> {
// 	const { product } = await getProduct(params)

// 	return {
// 		title: product.name,
// 		description: product.description,
// 		category: product.category.name,
// 		openGraph: {
// 			images: product?.images || [],
// 			description: product.description
// 		}
// 	}
// }

function ProductPage({ params }: any) {
	// const { product, similarProducts } = await getProduct(params)

	console.log(params)

	return <Product />
}

export default ProductPage
