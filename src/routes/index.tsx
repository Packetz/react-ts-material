import * as React from 'react'
import Paper from 'material-ui/Paper'
import { SiteHeader, SiteSidebar } from '../containers'
import Home from '../components/home/Home'
import Site404 from '../components/site/pages/Site404'
import { Route, Switch } from 'react-router-dom'

interface Props {
  container: any
}

export default function Routes(props: Props) {
  const { container } = props
  return (
    <span>
      <Route path="/" component={SiteHeader} />
      <Route path="/" component={SiteSidebar} />
      <Paper
        id="app-container"
        className="App-container"
        style={container}
      >
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route component={Site404} />
        </Switch>
      </Paper>
    </span>
  )
}