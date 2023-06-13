import { useTypedSelector } from './useTypedSelector'

export const useCart = () => {
	const items = useTypedSelector(state => state.cart.items)

	return {
		items
	}
}
