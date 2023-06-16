import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import Heading from '../Heading'

import { ProductGallery } from './ProductGallery'
import ProductInformation from './ProductInformation'
import ProductReviewsCount from './ProductReviewsCount'

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<section className='overflow-y-auto catalog'>
			<Heading className='mb-1'>{product.name}</Heading>
			<ProductReviewsCount product={product} />
			<div
				className='grid gap-12 mt-6'
				style={{
					gridTemplateColumns: '1fr 1fr 1fr'
				}}
			>
				<ProductGallery images={product.images} />
				<div className='opacity-80 font-light'>
					<div className='font-semibold mb-1'>Description:</div>
					{product.description}
				</div>
				<ProductInformation product={product} />
			</div>
			{/* <SimilarProducts similarProducts={similarProducts} /> */}
			{/* <ProductReviews reviews={product.reviews} productId={product.id} /> */}
		</section>
	)
}

export default ProductCard
