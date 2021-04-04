import { Actions } from './actions'

export interface State {}

export class Dispatcher {
  listeners: any[] // как обозначить массив функций в ts
  constructor(
    private rootReducer: (action: Actions, state: State) => State,
    private state: State
  ) {
    this.listeners = []
  }

  dispatch(action: Actions) {
    this.rootReducer(action, this.state)
    this.listeners.forEach((cb: () => any) => cb())
  }

  subscribe(cb: () => any) {
    this.listeners.push(cb)
  }
}
