import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import { IProduct, TypePaginationProducts } from '@/types/product.interface'

import Heading from '../Heading'
import Button from '../button/Button'

import SortDropdown from './SortDropDown'
import ProductItem from './product-item/ProductItem'
import { EnumProductSort } from '@/services/product/product.interface'
import { ProductService } from '@/services/product/product.service'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)

	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				sort: sortType,
				page,
				perPage: 4
			}),
		{
			initialData: data
		}
	)

	return (
		<section>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<SortDropdown setSortType={setSortType} sortType={sortType} />
			<div className='grid grid-cols-4 gap-10'>
				{response.products.map(product => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
			{response.length / 4 > page && (
				<div className='text-center mt-16'>
					<Button variant='orange' onClick={() => setPage(page + 1)}>
						Load More
					</Button>
				</div>
			)}
		</section>
	)
}

export default CatalogPagination
