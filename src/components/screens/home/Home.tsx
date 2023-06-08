import { FC } from 'react'

import Meta from '@/ui/Meta'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import Layout from '@/ui/layout/Layout'

import { logout } from '@/store/user/user.actions'

import { useAuth } from '@/hooks/useAuth'

import { TypePaginationProducts, TypeProducts } from '@/types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Meta title='Main'>
			<Layout>
				<CatalogPagination
					title='Freshed products'
					data={{ products, length }}
				/>
			</Layout>
		</Meta>
	)
}

export default Home
