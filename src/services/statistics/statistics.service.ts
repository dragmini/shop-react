import { IStatistic } from '@/types/statistic.interface'

import { axiosClassic, instanse } from '@/api/api.interceptor'

const STATISTICS = '/statistics'

export const StatisticsService = {
	async getMain() {
		return await axiosClassic<IStatistic[]>({
			url: STATISTICS,
			method: 'GET'
		})
	}
}
