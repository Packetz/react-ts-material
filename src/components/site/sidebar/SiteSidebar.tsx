import * as React from 'react'
import * as types from '../../../types'
import * as _ from 'lodash'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import './_styles.css'

interface Props {
  sidebar: types.Sidebar
  toggleSidebar: (sidebar: types.Sidebar) => void
  history: any
}

interface State { }

export default class SiteSidebar extends React.Component<Props, State> {
  public state: State = {}

  public handleToggleSidebar = () => {
    const { sidebar, toggleSidebar } = this.props
    const update: types.Sidebar = _.assign({}, sidebar, { open: !sidebar.open })
    toggleSidebar(update)
  }

  render() {
    const { sidebar } = this.props
    return (
      <Drawer
        open={sidebar.open}
        docked={sidebar.docked}
        openSecondary={true}
      >
        <IconButton className="Sidebar-close">
          <NavigationClose onClick={this.handleToggleSidebar} />
        </IconButton>
      </Drawer>
    )
  }
}
