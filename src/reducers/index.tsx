import * as actions from '../actions'
import * as constants from '../constants'
import {
  StoreState,
  Sidebar
} from '../types'

const initialState: StoreState = {
  sidebar: {
    type: constants.SIDEBAR,
    open: false,
    docked: true
  }
}

export function toggleSidebar(state: Sidebar, action: actions.SidebarAction): Sidebar {
  if (action.type === constants.SIDEBAR) {
    return {
      ...state,
      open: action.open,
      docked: action.docked
    }
  }
  return state || initialState.sidebar
}