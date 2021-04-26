import { Dispatcher } from './Dispatcher'
import { rootReducer } from './rootReducer'

export const store = new Dispatcher(rootReducer, { initial: '_INIT_' })
