import { FC } from 'react'

import { IUser, IUserPreview } from '@/types/user.interface'

const PreviewProfile: FC<IUserPreview> = ({ name, avatarPath }) => {
	return (
		<div className='flex gap-5 items-center border border-white border-solid px-5 py-2 rounded-lg cursor-pointer hover:bg-primary transition'>
			<img className='rounded-full w-10' src={avatarPath} />
			<p className='text-white'>{name}</p>
		</div>
	)
}

export default PreviewProfile
