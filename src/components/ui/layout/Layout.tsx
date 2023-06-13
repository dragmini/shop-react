import { FC, PropsWithChildren } from 'react'

import Header from './header/Header'
import SideBar from './sidebar/Sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className='h-screen'>
			<Header />
			<div
				className='grid grid-cols-2'
				style={{
					gridTemplateColumns: '1fr 4fr'
				}}
			>
				<SideBar />
				<main className='p-12'>{children}</main>
			</div>
		</div>
	)
}

export default Layout
