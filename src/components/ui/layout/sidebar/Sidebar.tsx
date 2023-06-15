import Link from 'next/link'
import { FC } from 'react'
import { TbGridDots } from 'react-icons/tb'

import { useCategories } from '@/hooks/useCategories'

const SideBar: FC = () => {
	const { categories = [] } = useCategories()

	return (
		<aside className='h-screen bg-secondary'>
			<p className='text-white text-[20px] flex gap-3 pl-4 mt-2'>
				Categories
				<span>{/* <TbGridDots /> */}</span>
			</p>
			<div className='flex flex-col gap-2 justify-start items-start pl-8 mt-4'>
				{categories.map(category => (
					<Link
						key={category.slug}
						href={`/category/${category.slug}`}
						className='text-white text-[16px]'
					>
						{category.name}
					</Link>
				))}
			</div>
		</aside>
	)
}

export default SideBar
