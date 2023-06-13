import { useQuery } from '@tanstack/react-query'

import { errorCatch } from '@/api/api.helper'

import { CategoryService } from '@/services/category/category.service'

export const useCategories = () => {
	const { data } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data,
			onError: error => {
				console.log(errorCatch(error))
			}
		}
	)

	return { categories: data }
}
