import { IOrder } from '@/types/order.interface'

import { instanse } from '@/api/api.interceptor'

const ORDERS = '/orders'

export const OrderService = {
	async getAll() {
		return await instanse<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	}
}
