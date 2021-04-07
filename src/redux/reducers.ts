import { Action, State } from './Dispatcher'

export function initialReducer(action: Action, state: State) {
  return { ...state, initial: '_INIT_' }
}
