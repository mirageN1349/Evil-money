import { Actions } from './actions'
import { Action, State } from './Dispatcher'
import { initialReducer } from './reducers'

export function rootReducer(action: Action, state: State): State {
  switch (action.type) {
    case Actions.INITIAL_STATE:
      return initialReducer(action, state)
  }
  return state
}
