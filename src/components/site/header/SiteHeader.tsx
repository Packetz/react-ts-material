import * as React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import * as types from '../../../types'
import * as _ from 'lodash'
import './_styles.css'

const Logo: string = require('../../../images/logo.svg')

interface Props {
  sidebar: types.Sidebar
  history: { push: (path: string) => void }
  toggleSidebar: (sidebar: types.Sidebar) => void
}

interface State {

}

export default class SiteHeader extends React.Component<Props, State> {
  public handleToggleSidebar = () => {
    const { sidebar, toggleSidebar } = this.props
    const update: types.Sidebar = _.assign({}, sidebar, { open: !sidebar.open })
    toggleSidebar(update)
  }

  public handleNavigation = (url: string) => {
    const { history } = this.props
    history.push(url)
  }
  render() {
    return (
      <header className="Header-container">
        <AppBar
          title={
            <img 
              src={Logo} 
              alt="Welcome" 
              width={65} 
              height={65}
              onClick={() => this.handleNavigation('/')}
            />}
          showMenuIconButton={false}
          iconElementRight={
            <IconButton onClick={this.handleToggleSidebar}>
              <NavigationMenu color="#000" />
            </IconButton>}
        />
      </header>
    )
  }
}