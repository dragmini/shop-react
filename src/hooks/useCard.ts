import { useTypedSelector } from './useTypesSelector'

export const useCard = () => {
	const items = useTypedSelector(state => state.card)

	return {
		items
	}
}
