import '../src/scss/index.scss'
import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.css'

import { TrueReactDOM } from './core/Component'

import { Header } from './components/Header/Header'
import { Diagrams } from './components/Diagrams/Diagrams'
import { Bank_accounts } from './components/Bank_accounts/Bank_accounts'
import { Right_block } from './components/Right_block/Right_block'

const trueReactDOM = new TrueReactDOM()

trueReactDOM._render(
  [Header, Diagrams, Bank_accounts, Right_block],
  document.getElementById('root')!
)

new SimpleBar(document.getElementById('simple-bar')!)
