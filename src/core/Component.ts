import { getMethodName } from '../utils/getMethodName'

interface Options {
  listeners: string[]
  className: string
}
export class Component {
  listeners: string[]
  className: string
  constructor(options: Options) {
    this.listeners = options?.listeners || []
    this.className = options?.className || ''
  }

  componentDidMount() {}

  componentWillUpdate() {}

  _addEvents() {
    if (this.listeners.length) {
      const el = document.querySelector(`.${this.className}`)

      if (!el) {
        throw new Error(
          `No node element found for your class name ${this.className}`
        )
      }

      this.listeners.forEach((listener: string) => {
        const method = getMethodName(listener)

        // @ts-ignore
        const cb = this[method] // разобраться с этой ошибкой
        if (!cb) {
          throw new Error(
            `Method ${method} not created in component ${this.className}`
          )
        }
        el.addEventListener(listener, cb)
      })
    }
  }

  _removeEvents() {
    if (this.listeners.length) {
      const el = document.querySelector(`.${this.className}`)

      if (!el) {
        throw new Error(
          `No node element found for your class name ${this.className}`
        )
      }

      this.listeners.forEach((listener: string) => {
        const method = getMethodName(listener)

        // @ts-ignore
        const cb = this[method] // разобраться с этой ошибкой
        el.removeEventListener(listener, cb)
      })
    }
  }
}
