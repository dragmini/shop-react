import { useRouter } from 'next/router'
import { FC } from 'react'

import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'

import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'

const Favorites: FC = () => {
	// const { user } = useAuth()
	// const { replace } = useRouter()
	const { profile } = useProfile()

	// if (!user) replace('/')

	if (!profile) return null

	return (
		<Meta title='Main'>
			<Layout>
				<Catalog products={profile.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}

export default Favorites
