import { cardSlice } from './card/card.slice'
import * as userActions from './user/user.actions'

export const rootAction = {
	...userActions,
	...cardSlice.actions
}
