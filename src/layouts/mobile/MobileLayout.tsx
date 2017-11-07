import * as React from 'react'

import './MobileLayout.css'

interface IProps {
  children?: any, // tslint:disable-line no-any
}

function MobileLayout(props: IProps) {
  const Content = () => (
    <div className="app_content">
      {props.children}
    </div>
  )

  return (
    <div className="app_root">
      <div className="app_frame">
        <Content />
      </div>
    </div>
  )
}

export default MobileLayout
