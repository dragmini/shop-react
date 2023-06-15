import { useQuery } from '@tanstack/react-query'

import { errorCatch } from '@/api/api.helper'

import { ProductService } from '@/services/product/product.service'

export const useProduct = (slug: string) => {
	const { data } = useQuery(
		['get categories'],
		() => ProductService.getBySlug(slug),
		{
			select: ({ data }) => data,
			onError: error => {
				console.log(errorCatch(error))
			}
		}
	)

	return { product: data }
}
