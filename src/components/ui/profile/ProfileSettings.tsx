import { E164Number } from 'libphonenumber-js/types'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import PhoneNumberInput from 'react-phone-number-input'

import { useProfile } from '@/hooks/useProfile'

import { IUserUpdate } from '@/types/user.interface'

import Heading from '../Heading'
import Button from '../button/Button'
import Field from '../input/Field'

import { IProfileUpdate } from '@/services/user/profile-update.interface'
import { UserService } from '@/services/user/user.service'

const ProfileSettings: FC<{ title: string }> = ({ title }) => {
	const { profile } = useProfile()

	const {
		register: formProfile,
		handleSubmit,
		reset
	} = useForm<IProfileUpdate>({
		mode: 'onChange'
	})

	if (!profile) return null

	const onSubmit: SubmitHandler<IProfileUpdate> = data => {
		UserService.updateProfile(data)

		reset()
	}
	// defaultValues: {
	// 	name: profile.name,
	// 	email: profile.email,
	// 	phone: profile.phone
	// }
	// })?

	return (
		<section className='flex flex-col'>
			{title && <Heading className='mb-5'>{title}</Heading>}
			<form
				className='flex flex-col items-cente'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='animate-scaleIn flex gap-5 items-center  cursor-pointer'>
					<img className='rounded-full w-50' src={profile.avatarPath} />
					{/* <p className='text-secondary text-[24px]'>{profile.name}</p> */}
					<div className='flex flex-col gap-5'>
						<Field
							{...formProfile('name', {})}
							label='Name'
							placeholder={profile.name}
						/>
						<Field
							{...formProfile('email', {})}
							label='Email'
							placeholder={profile.email}
						/>

						<Field
							{...formProfile('phone', {})}
							label='Phone'
							placeholder={profile.phone}
						/>
					</div>
				</div>

				<Button type='submit' className='self-center' variant='orange'>
					Save
				</Button>
			</form>
		</section>
	)
}

export default ProfileSettings
