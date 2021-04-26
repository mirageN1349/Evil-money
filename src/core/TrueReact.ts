export class TrueReact {
  jsx: string
  constructor() {
    this.jsx = ''
  }

  render(App: any, rootElem: HTMLElement) {
    if (!rootElem) {
      throw new Error('Create an id element named root in the index.html file')
    }

    const app = new App()

    if (!this.jsx) {
      this.jsx = app.render()
    }

    App.dependencies.map((Component: any) => {
      const { component, jsx } = Component._render(Component, this.jsx)
      this.jsx = jsx
      rootElem.innerHTML = this.jsx
      component.componentDidMount()
      component._addEvents(Component)
    })
  }
}
