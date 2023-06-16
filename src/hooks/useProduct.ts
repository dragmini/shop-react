import { useQuery } from '@tanstack/react-query'

import { errorCatch } from '@/api/api.helper'

import { ProductService } from '@/services/product/product.service'

export const useProduct = (slug: string) => {
	const { data } = useQuery(
		['get product'],
		() => ProductService.getBySlug(slug),
		{
			select: ({ data }) => data,
			onError: error => {
				console.log(errorCatch(error))
			}
		}
	)

	return data
}
