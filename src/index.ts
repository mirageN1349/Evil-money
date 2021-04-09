import '../src/scss/index.scss'
import { App } from './App'

import { TrueReact } from './core/TrueReact'

const trueReactDOM = new TrueReact()

trueReactDOM.render(App, document.getElementById('root')!)
