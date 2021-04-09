import { getMethodName } from '../utils/getMethodName'

interface Options {
  listeners: string[]
}

interface RenderResult {
  jsx: string
  component: any
}
export class Component {
  listeners: string[]
  static dependencies: any[]
  static _initComponent: any
  constructor(options: Options) {
    this.listeners = options?.listeners || []
  }

  static _render(ComponentProp: any, jsx: string): RenderResult {
    const componentProp = new ComponentProp()
    componentProp.componentWillUpdate()

    const renderResult = {
      component: componentProp,
      jsx,
    }

    const reJsxTag = /<\/?([A-Z]\w+)([^<>\/]+)?(\s?\/)?>/g

    let reJsxTagDependency: any
    let reJsxTagProp: any

    while ((reJsxTagProp = reJsxTag.exec(renderResult.jsx)) !== null) {
      if (ComponentProp.name === reJsxTagProp[1]) {
        renderResult.jsx = componentProp._replaceJsx(
          renderResult.jsx,
          componentProp,
          reJsxTagProp
        )
      }
    }

    while (
      (reJsxTagDependency = reJsxTag.exec(componentProp.render())) !== null
    ) {
      ComponentProp.dependencies.map((Dependency: any) => {
        if (Dependency?.name === reJsxTagDependency[1]) {
          const dependency = new Dependency()
          dependency.componentWillUpdate()

          renderResult.jsx = dependency._replaceJsx(
            renderResult.jsx,
            dependency,
            reJsxTagDependency
          )
        }
      })
    }

    return renderResult
  }

  _getProps(props: string) {
    const propsArr: string[] = props.trim().split(/\s+/g)

    const currentProps = propsArr.map((props: string): string => {
      const str = props?.split('=')[1]
      if (!str) return ''
      return str.slice(0, str.length - 1).slice(1)
    })

    return currentProps
  }

  _replaceJsx(jsx: string, component: any, regex: any) {
    return jsx.replace(
      regex[0],
      component.render(...component._getProps(regex[2]))
    )
  }

  render(...args: any): string {
    return ''
  }

  setState() {}

  componentDidMount() {}

  componentWillUpdate() {}

  _addEvents(Component: any) {
    if (this.listeners.length) {
      const el = document.querySelector(`#root`)
      if (!el) {
        throw new Error(
          `No node element found for your class name ${Component.name}`
        )
      }
      this.listeners.forEach((listener: string) => {
        const method = getMethodName(listener)
        // @ts-ignore
        const cb = this[method] // разобраться с этой ошибкой
        if (!cb) {
          throw new Error(
            `Method ${method} not created in component ${Component.name}`
          )
        }
        el.addEventListener(listener, cb)
      })
    }
  }

  _removeEvents() {
    // if (this.listeners.length) {
    //   const el = document.querySelector(`.${this.className}`)
    //   if (!el) {
    //     throw new Error(
    //       `No node element found for your class name ${this.className}`
    //     )
    //   }
    //   this.listeners.forEach((listener: string) => {
    //     const method = getMethodName(listener)
    //     // @ts-ignore
    //     const cb = this[method] // разобраться с этой ошибкой
    //     el.removeEventListener(listener, cb)
    //   })
    // }
  }
}
