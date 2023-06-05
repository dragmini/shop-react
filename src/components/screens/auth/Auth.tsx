import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const Auth: FC = () => {
	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState,
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
			<Heading className='capitalize'>{type}</Heading>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Button variant='orange'>Let's go!</Button>
			</form>
		</Meta>
	)
}

export default Auth
