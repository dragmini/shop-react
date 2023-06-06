import { useTypedSelector } from './useTypesSelector'

export const useCard = () => useTypedSelector(state => state.card)
