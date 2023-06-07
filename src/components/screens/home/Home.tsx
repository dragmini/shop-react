import { FC } from 'react'

import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'

import { logout } from '@/store/user/user.actions'

import { useAuth } from '@/hooks/useAuth'

import { TypePaginationProducts, TypeProducts } from '@/types/product.interface'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()

	return (
		<Meta title='Main'>
			<Layout>
				{!!user && <button onClick={() => logout()}>Logout</button>}
				<Catalog title='Freshed products' products={products || []} />
			</Layout>
		</Meta>
	)
}

export default Home
