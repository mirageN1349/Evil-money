import { Component } from '../../core/Component'

export class Header extends Component {
  constructor() {
    super({ listeners: [], className: 'header' })
  }
  render() {
    return `
    <header class="header">
    <nav>
      <a class="header-link">Категории</a>
      <a class="header-link">Расходы</a>
      <a class="header-link">Доходы</a>
      <a class="header-link">Инвестиции</a>
    </nav>

    <!-- Добавить селекты -->
    <div class="header-select">
      <input class="select-input"  placeholder="Расход" type="text" />
      <select class="select">
        <option>Продукты</option>
        <option>Врачи</option>
        <option>Кино</option>
      </select>
    </div>

    <button class="select-button">
      <img src="/images/header/plus.svg" alt="" />
    </button>

    <div class="header-select">
      <input class="select-input" placeholder="Доход" type="text" />
      <select class="select">
      <option>Зарплата</option>
      <option>Бонусы</option>
      <option>Инвестиции</option>
    </select>
    </div>

    <button class="select-button">
      <img src="/images/header/plus.svg" alt="" />
    </button>
  </header>

    `
  }
}
