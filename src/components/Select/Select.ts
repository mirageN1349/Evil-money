import { Component } from '../../core/Component'

export class Select extends Component {
  static dependencies = []
  constructor() {
    super({ listeners: [] })
  }

  componentWillUpdate() {}

  render(type: string, optionsSelect: any = '{}') {
    const currentOptions = JSON.parse(optionsSelect)

    const optionsHTML = Object.keys(currentOptions).map(
      (option: string) =>
        `<option data-type="${option}">${currentOptions[option]}</option>`
    )

    return `
    <div style="display: flex">
      <div class="header-select">
        <input class="select-input"  placeholder="${type}..." type="text" />
        <select class="select">
         ${optionsHTML}
        </select>
      </div>
      <button class="select-button">
        <img src="/images/header/plus.svg" alt="" />
      </button>
    </div>
    `
  }
}
