import React from 'react'
import { ReactShareFloat } from 'react-share-float'

export function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>react-share-float example</h1>
      <p>Scroll and see the floating button.</p>
      <div style={{ height: 1200 }} />
      <ReactShareFloat />
    </div>
  )
}


