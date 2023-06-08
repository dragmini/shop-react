import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

import { ReviewService } from '@/services/review/review.service'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	// const { data: rating } = useQuery(
	// 	['get product rating', product.id],
	// 	() => ReviewService.getAverageByProduct(product.id),
	// 	{
	// 		select: ({ data }) => data
	// 	}
	// )

	const [rating, setRating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className='mb-2 flex items-center'>
			{!!product.reviews.length && (
				<span className='mr-1'>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{ display: 'inline-block' }}
						size={20}
						allowFraction
						transition
					/>
				</span>
			)}
			{/* <span className='text-[#FFBC0D]'>{rating}</span> */}
			<span className='text-sm pt-1'>({product.reviews.length} reviews)</span>
		</div>
	)
}

export default ProductRating
