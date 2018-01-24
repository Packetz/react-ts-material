import * as constants from '../constants'
import * as types from '../types'

/* Types */
export type SidebarAction = types.Sidebar

/* Actions */
export function toggleSidebar(item: any = {}): types.Sidebar {
  return {
    type: constants.SIDEBAR,
    open: item.open,
    docked: item.docked
  }
}