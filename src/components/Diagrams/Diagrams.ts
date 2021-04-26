import { Component } from '../../core/Component'
import { store } from '../../redux/store'

export class Diagrams extends Component {
  static dependencies = []
  constructor() {
    super({ listeners: [] })
  }

  componentWillUpdate() {}

  setState(cb: () => {}) {}

  render() {
    return `
    <div class="diagrams-wrap">${store.getState().inputValue}</div>
    `
  }
}
