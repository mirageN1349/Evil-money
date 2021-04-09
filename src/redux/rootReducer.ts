import { Actions } from './actions'
import { Action, State } from './Dispatcher'
import { initialReducer, inputReducer } from './reducers'

export function rootReducer(action: Action, state: State): State {
  switch (action.type) {
    case Actions.INITIAL_STATE:
      return initialReducer(action, state)
    case Actions.INPUT_NAME:
      return inputReducer(action, state)
    default:
      return state
  }
}
