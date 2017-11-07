import * as React from 'react'

export default function({value}: {value: string}): JSX.Element {
  return (
    <div className="app_message">
      <span>{value}</span>
    </div>
  )
}
