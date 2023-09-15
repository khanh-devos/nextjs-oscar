import React, { useState } from "react"


export default function ErrorBoundary({
    children
  }: {
    children: React.ReactNode
  }) {
    
  const [hasError, setHasError] = useState(false);
   
    // Check if the error is thrown
  const doWithErr = () => {  
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => setHasError(false)}
          >
            Try again?
          </button>
        </div>
      )
    }
  }
   
  return (
    <div>
      {children}
    </div>
  )
    
}
   