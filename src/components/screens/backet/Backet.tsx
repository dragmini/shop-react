import { useRouter } from 'next/router'
import { FC } from 'react'

import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'

import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'

import { IProduct } from '@/types/product.interface'

const Basket: FC = () => {
	const { items } = useCart()

	const products: IProduct[] = items.map((item: any) => item.product)

	return (
		<Meta title='Main'>
			<Layout>
				<Catalog products={products} title='Basket' />
			</Layout>
		</Meta>
	)
}

export default Basket
