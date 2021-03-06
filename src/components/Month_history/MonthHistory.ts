import { Component } from '../../core/Component'

export class MonthHistory extends Component {
  constructor() {
    super({ listeners: [] })
  }
  render() {
    return `
    <div class="month-history">
       <h1 class="month-history-title">Сентябрь</h1>
      <div class="month-history-popular__content">
        <div class="month-history-popular">
          <h2 class="month-history-popular__title">Продукты</h2>
          <div class="month-history-popular__info">
            <div class="month-history-popular__color_block"></div>
            <div class="month-history-popular__price">432 ₽</div>
          </div>
        </div>

        <div class="month-history-popular">
          <h2 class="month-history-popular__title">Здоровье</h2>
          <div class="month-history-popular__info">
            <div class="month-history-popular__color_block"></div>
            <div class="month-history-popular__price">1324 ₽</div>
          </div>
        </div>

        <div class="month-history-popular">
          <h2 class="month-history-popular__title">Продукты</h2>
          <div class="month-history-popular__info">
            <div class="month-history-popular__color_block"></div>
            <div class="month-history-popular__price">432 ₽</div>
          </div>
        </div>

        <div class="month-history-popular">
          <h2 class="month-history-popular__title">Все траты</h2>
          <div class="month-history-popular__info">
            <div class="month-history-popular__total-price">10 326 ₽</div>
          </div>
        </div>
      </div>
</div>

    `
  }
}
