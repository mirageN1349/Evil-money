import { Component } from '../../core/Component'
import { Actions } from '../../redux/actions'
import { store } from '../../redux/store'
import { Select } from '../Select/Select'

export class Header extends Component {
  static dependencies = [Select]
  constructor() {
    super({ listeners: ['input'] })
  }

  onInput(e: MouseEvent) {
    //@ts-ignore
    store.dispatch({ type: Actions.INPUT_NAME, payload: e.target.value })
  }

  render() {
    const optionsIncome = {
      options1: 'Зарплата',
      option2: 'Бонусы',
      options3: 'долги',
    }

    const optionsConsumption = {
      options1: 'Продукты',
      option2: 'Транспорт',
      options3: 'Кино',
    }

    return `
    <header class="header">
      <nav>
        <a class="header-link">Категории</a>
        <a class="header-link">Расходы</a>
        <a class="header-link">Доходы</a>
        <a class="header-link">Инвестиции</a>
      </nav>

      <Select type="Расход" option="${JSON.stringify(optionsConsumption)}"/>
       
      <Select  type="Доход" option="${JSON.stringify(optionsIncome)}"/> 
    </header>
    `
  }
}
