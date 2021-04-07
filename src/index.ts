import '../src/scss/index.scss'

import { TrueReactDOM } from './core/TrueReactDOM'

import { Header } from './components/Header/Header'
import { Diagrams } from './components/Diagrams/Diagrams'
import { Bank_accounts } from './components/Bank_accounts/Bank_accounts'
import { Right_block } from './components/Right_block/Right_block'
import { store } from './redux/store'

const trueReactDOM = new TrueReactDOM()

function render() {
  trueReactDOM._render(
    [Header, Diagrams, Bank_accounts, Right_block], // Сюда передавать страницу, в которой будут компоненты
    document.getElementById('root')!
  )
}

store.subscribe(() => {
  render()
})

render()
