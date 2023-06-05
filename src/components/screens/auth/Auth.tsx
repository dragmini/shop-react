import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { useAuthRedirect } from './useAuthRedirect'
import { validEmail } from './valid-email'
import { validPasword } from './valid-password'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sm p-8 m-auto'
				>
					<Heading className='capitalize text-center mb-4'>{type}</Heading>
					{/*TODO: Сделать ролик загрузки */}
					{/* {isLoading ? (
						<Loader />
					) : (
						<> */}
					<Field
						{...formRegister('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address'
							}
						})}
						placeholder='Email'
						error={errors.email?.message}
					/>
					<Field
						{...formRegister('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols'
							}
						})}
						type='password'
						placeholder='Password'
						error={errors.password?.message}
					/>
					<Button type='submit' variant='orange'>
						Let's go!
					</Button>
					<button
						type='button'
						className='inline-block opacity-50 mt-3 ml-3
                '
						onClick={() => setType(type === 'login' ? 'register' : 'login')}
					>
						{type === 'login' ? 'Register' : 'Login'}
					</button>
					{/* </> */}
					{/* )} */}
				</form>
			</section>
		</Meta>
	)
}

export default Auth
