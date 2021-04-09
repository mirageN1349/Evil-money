import { Component } from '../../core/Component'

import SimpleBar from 'simplebar'
import 'simplebar/dist/simplebar.css'

export class History extends Component {
  constructor() {
    super({ listeners: [] })
  }

  componentDidMount() {
    new SimpleBar(document.getElementById('simple-bar')!)
  }

  render() {
    return `
    <div class="history">
    <h1 class="history-title">Последние транзакции</h1>
    <div id="simple-bar" style="max-height: 320px">
      <div class="history-wrapper">
        <h2 class="history-subtitle">Сегодня</h2>
        <div class="history-block">
          <div class="history-block__info_wrapper">
            <img
              src="/images/history/eat.svg"
              alt="eat"
              class="history-block__image"
            />
            <div class="history-block__info">
              <h3 class="history-block__title">Креветки</h3>
              <div class="history-block__category">Еда</div>
            </div>
          </div>
          <div class="history-block__price">- 500 ₽</div>
        </div>

        <div class="history-block">
          <div class="history-block__info_wrapper">
            <img
              src="/images/history/heart.svg"
              alt="eat"
              class="history-block__image"
            />
            <div class="history-block__info">
              <h3 class="history-block__title">Плановый осмотр</h3>
              <div class="history-block__category">Здоровье</div>
            </div>
          </div>
          <div class="history-block__price">- 10 000 ₽</div>
        </div>

        <div class="history-block">
          <div class="history-block__info_wrapper">
            <img
              src="/images/history/theater.svg"
              alt="eat"
              class="history-block__image"
            />
            <div class="history-block__info">
              <h3 class="history-block__title">Кино</h3>
              <div class="history-block__category">Развлечения</div>
            </div>
          </div>
          <div class="history-block__price">- 1 592 ₽</div>
        </div>

        <h2 class="history-subtitle">Вчера</h2>

        <div class="history-block">
          <div class="history-block__info_wrapper">
            <img
              src="/images/history/eat.svg"
              alt="eat"
              class="history-block__image"
            />
            <div class="history-block__info">
              <h3 class="history-block__title">Мороженное</h3>
              <div class="history-block__category">Еда</div>
            </div>
          </div>
          <div class="history-block__price">- 1043 ₽</div>
        </div>

        <div class="history-block">
          <div class="history-block__info_wrapper">
            <img
              src="/images/history/heart.svg"
              alt="eat"
              class="history-block__image"
            />
            <div class="history-block__info">
              <h3 class="history-block__title">Консультация</h3>
              <div class="history-block__category">Здоровье</div>
            </div>
          </div>
          <div class="history-block__price">- 5000 ₽</div>
        </div>

        <div class="history-block">
          <div class="history-block__info_wrapper">
            <img
              src="/images/history/theater.svg"
              alt="eat"
              class="history-block__image"
            />
            <div class="history-block__info">
              <h3 class="history-block__title">Аквапарк</h3>
              <div class="history-block__category">Развлечения</div>
            </div>
          </div>
          <div class="history-block__price">- 2500 ₽</div>
        </div>
      </div>
    </div>
  </div>
    `
  }
}
