import { Component } from '../../core/Component'

export class BankAccounts extends Component {
  constructor() {
    super({ listeners: [] })
  }

  render() {
    return `
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      "
    >
      <div class="bank-accounts">
        <h1 class="bank-accounts__title">Ваши счета</h1>
      </div>
      <div class="app-logo-name">
        <img src="/" alt="Logo" />
        <h1 class="app-name">Evil Money</h1>
      </div>
    </div>
    `
  }
}
