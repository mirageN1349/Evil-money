export class Header {
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
      <input class="select-input" placeholder="Доход" type="text" />
      <input class="select" type="text" placeholder="Выберите..." />
    </div>

    <button class="select-button">
      <img src="/images/header/plus.svg" alt="" />
    </button>

    <div class="header-select">
      <input class="select-input" placeholder="Расход" type="text" />
      <input class="select" type="text" placeholder="Выберите..." />
    </div>

    <button class="select-button">
      <img src="/images/header/plus.svg" alt="" />
    </button>
  </header>

    `
  }
}
