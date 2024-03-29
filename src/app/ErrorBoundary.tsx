"use client"

import React, { ErrorInfo } from "react"

interface Props {
  children?: React.ReactNode;
}

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: Props) {
    super(props)
 
    // Define a state variable to track whether is an error or not
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI
    console.warn(error);
    return { hasError: true }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    alert(`${error}: ${errorInfo}`)

  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      )
    }
 
    // Return children components in case of no error
 
    return this.props.children
  }
}
 
export default ErrorBoundary