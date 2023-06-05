import { NextPage } from 'next'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

const HomePage: NextPage = () => {
	return <h1 className='text-3xl font-bold underline'>Hello world!</h1>
}

export default HomePage
