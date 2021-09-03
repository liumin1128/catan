import React, { PureComponent } from 'react'

export default (WrappedComponent: any, props: unknown) =>
  class extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} {...props} />
    }
  }
