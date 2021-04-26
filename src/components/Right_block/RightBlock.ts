import { Component } from '../../core/Component'

export class RightBlock extends Component {
  static dependencies = []
  state: any
  constructor() {
    super({ listeners: ['click'] })
    this.state = {
      right: 0,
    }
  }

  componentDidMount() {}

  onClick(e: MouseEvent) {
    const currentTarget: any = e.target

    if (currentTarget.classList.contains('close')) {
      this.setState({
        right: '-370px',
      })
    }
  }

  setState(newState: any) {
    this.state = newState
  }

  render() {
    return `
    <div class="right-block" style="right: ${this.state.right}">
    <div class="right-block__tabs">
      <div class="right-block__tabs-title">Бюджет</div>
      <div class="right-block__tabs-title_active">Профиль</div>
      <img class="close" src="/images/right_block/arrow.svg" alt="закрыть" />
    </div>
    <form class="right-block__form">
      <h2 class="right-block__title">Зарегистрироваться</h2>
      <input
        type="text"
        name="name"
        id="name"
        class="right-block__input"
        placeholder="Name:"
      />
      <input
        type="text"
        name="email"
        class="right-block__input"
        placeholder="email:"
      />
      <input
        type="text"
        name="password"
        class="right-block__input"
        placeholder="Password:"
      />
      <div class="right-block__buttons">
        <button class="right-block__signin">Sign Up</button>
        или
        <button class="right-block__change">
          <span>Sign In</span>
          <img src="/images/right_block/arrow.svg" alt="закрыть" />
        </button>
      </div>
    </form>
  </div>
    `
  }
}
