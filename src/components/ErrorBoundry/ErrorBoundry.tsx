import React, { Component, ErrorInfo, ReactNode } from 'react'

interface IErrorBoundaryProps {
  children: React.ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({
      hasError: true,
    })

    console.error(error, info)
  }

  render(): ReactNode {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return <div>Error page :(</div>
    }

    return children
  }
}
