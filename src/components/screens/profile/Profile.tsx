import { FC } from 'react'

import Meta from '@/ui/Meta'
import Layout from '@/ui/layout/Layout'
import ProfileSettings from '@/ui/profile/ProfileSettings'

const Profile: FC = () => {
	return (
		<Meta title='Profile'>
			<Layout>
				<ProfileSettings title='Profile information' />
			</Layout>
		</Meta>
	)
}

export default Profile
