import * as React from 'react'

import Layout from '../layouts/'
import Routes from '../routes/'

import ReduxRouter from './ReduxRouter'

import './App.css'

interface IProps {}
interface IState {}

class App extends React.Component<IProps, IState> {
  render() {
    return (
      <div className="app">
        <ReduxRouter>
          <Layout>
            <Routes />
          </Layout>
        </ReduxRouter>
      </div>
    )
  }
}

export default App
