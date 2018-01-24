import * as constants from '../constants'

export interface StoreState {
  sidebar: Sidebar
}

/* Interfaces */
export interface Sidebar {
  type: constants.SIDEBAR
  open: boolean
  docked: boolean
}