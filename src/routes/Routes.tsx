/* Order of routing definitions
  ---
  exact=true  specific:  /accounts
  exact=true  specific:  /accounts/:id/detail
  exact=true  redirect:  /accounts/:id => /accounts/:id/detail
  exact=false  ::nested:  /accounts/:id/[settings, dashboard, alerts]
*/

import * as React from 'react'
import { Link, Route, Switch } from 'react-router-dom' // Redirect, 

import { Message } from '../components/'

// interface IProps {
//   match?: {params: {id: string}},
// }
// interface IState {}

function Page({title, message}: {title: string, message: string}): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      <Message value={message} />
    </div>
  )
}

function Navigation() {
  return (
    <div className="app_navigation">
      <Link style={{color: '#fff', marginLeft: '10px'}} to="/helloworld">Helloworld</Link>
      <Link style={{color: '#fff', marginLeft: '10px'}} to="/foobar">Foobar</Link>
      <Link style={{color: '#fff', marginLeft: '10px'}} to="/someotherlink">Go to 404</Link>
    </div>
  )
}

class Routes extends React.Component<{}, {}> {
  render() {
    return (
      <div id="app_routes">
        <Navigation />
        <Switch>
          <Route
            path="/helloworld"
            exact={true}
            component={() => <Page title="Hello World"  message="Greetings!! " />}
          />
          <Route
            path="/foobar"
            exact={true}
            component={() => <Page title="Foo Bar"  message="Bar bar mcBizzile " />}
          />          
          <Route
            path="/"
            exact={true}
            component={() => <Page title="Home Page"  message="Click a link... " />}
          />

          <Route
            component={() => <Page title="Not Found"  message="Woops... " />}
          />
        </Switch>
      </div>
    )
  }
}

export default Routes
