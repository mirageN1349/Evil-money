import { Actions } from './actions'

export interface Action {
  type: Actions
  payload: any
}
export interface State {
  initial: string
}

export class Dispatcher {
  subscribers: any[] // как обозначить массив функций в ts
  constructor(
    private rootReducer: (action: Action, state: State) => State,
    private state: State
  ) {
    this.subscribers = []
  }

  dispatch(action: Action) {
    this.state = this.rootReducer(action, this.state)
    this.subscribers.forEach((cb: () => void) => cb())
  }

  subscribe(cb: () => void) {
    this.subscribers.push(cb)
  }

  getState() {
    return this.state
  }
}
