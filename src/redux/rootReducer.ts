import { Actions } from './actions'
import { State } from './Dispatcher'

export function rootReducer(action: Actions, state: State): State {
  switch (action) {
    case Actions.INITIAL_STATE:
      console.log('_INIT_')
      break
  }

  return state
}
