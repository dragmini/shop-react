import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'
import { BsMinecartLoaded } from 'react-icons/bs'
import { RiShoppingCartFill, RiShoppingCartLine } from 'react-icons/ri'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useCard } from '@/hooks/useCard'
import { useProfile } from '@/hooks/useProfile'

import PreviewProfile from './PreviewProfile'

const Header: FC = () => {
	const { addToCard, removeFromCard } = useActions()
	const { items = [] } = useCard()

	const { profile } = useProfile()

	const { replace } = useRouter()

	// console.log(profile)

	// if (!profile) return null

	// console.log(user)

	// console.log(items)

	// const currentElement = items.find(
	// 	(cardItem: any) => cardItem.product.id === product.id
	// )

	return (
		<header className='bg-secondary w-full h-20 flex items-center justify-between px-4'>
			<Link href='/' className='text-white text-lg'>
				Main
			</Link>
			<div className='flex items-center gap-5'>
				{/* {!!items.length ? <RiShoppingCartFill /> : <RiShoppingCartLine />} */}
				{profile && (
					<button onClick={() => replace('/profile')}>
						<PreviewProfile
							name={profile.name}
							avatarPath={profile.avatarPath}
						/>
					</button>
				)}
				<button onClick={() => replace('/basket')}>
					<BsMinecartLoaded size={30} className='text-white cursor-pointer' />
				</button>
			</div>
		</header>
	)
}

export default Header
