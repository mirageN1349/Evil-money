import { Component } from './core/Component'
import { Header } from './components/Header/Header'
import { Diagrams } from './components/Diagrams/Diagrams'
import { BankAccounts } from './components/Bank_accounts/BankAccounts'
import { RightBlock } from './components/Right_block/RightBlock'
import { History } from './components/History/History'
import { MonthHistory } from './components/Month_history/MonthHistory'

export class App extends Component {
  static dependencies = [
    Header,
    Diagrams,
    MonthHistory,
    BankAccounts,
    RightBlock,
    History,
  ]

  constructor() {
    super({
      listeners: [],
    })
  }
  render() {
    return `
    <div>
      <Header />
      <div class="index-wrapper">
        <Diagrams />
        <div class="month-history_wrapper">
          <MonthHistory />
          <MonthHistory />
          <MonthHistory />
        </div>
      </div>
      <div class="history_bank-accounts_wrapper">
        <History />
        <BankAccounts />
      </div>
      <RightBlock />
    </div>
    `
  }
}
