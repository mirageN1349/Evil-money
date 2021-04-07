export class TrueReactDOM {
  componentsInstance: any[]
  constructor() {
    this.componentsInstance = []
  }

  _render(components: any[], rootElem: HTMLElement) {
    if (!rootElem) return null
    this.componentsInstance = components.map(Component => {
      const component = new Component()
      return component
    })

    const jsx = this.componentsInstance.map(component => {
      component.componentWillUpdate()

      return component.render()
    })

    rootElem.innerHTML = jsx.join(' ')

    this.componentsInstance.forEach(component => {
      component._addEvents()
      component.componentDidMount()
    })
  }
}
