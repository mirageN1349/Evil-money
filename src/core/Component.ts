export class TrueReactDOM {
  _render(components: any[], rootElem: HTMLElement) {
    if (!rootElem) return null

    const jsx = components.map(Component => {
      const component = new Component()
      return component.render()
    })

    rootElem.innerHTML = jsx.join(' ')
  }
}
