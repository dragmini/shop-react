import { IStatistic } from '@/types/statistic.interface'

import { instanse } from '@/api/api.interceptor'

const STATISTICS = '/statistics'

export const StatisticsService = {
	async getMain() {
		return await instanse<IStatistic[]>({
			url: STATISTICS,
			method: 'GET'
		})
	}
}
