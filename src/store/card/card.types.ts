import { ICardItem } from '@/types/card.interface'

export interface ICardInititalState {
	items: ICardItem[]
}

export interface IAddToCardPayload extends Omit<ICardItem, 'id'> {}

export interface IChangeQuantityPayload extends Pick<ICardItem, 'id'> {
	type: 'minus' | 'plus'
}
