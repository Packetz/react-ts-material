import { SiteSidebar } from '../../../components/site'
import * as actions from '../../../actions'
import * as types from '../../../types'
import { connect, Dispatch } from 'react-redux'

export function mapStateToProps({ sidebar }: types.StoreState) {
  return {
    sidebar
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.SidebarAction>) {
  return {
    toggleSidebar: (item: types.Sidebar) => dispatch(actions.toggleSidebar(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SiteSidebar)