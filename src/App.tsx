import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import * as types from './types'
import * as reducers from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Routes from './routes'
import muiTheme from './theme'
import './App.css'

const rootReducer = combineReducers<types.StoreState>({
  sidebar: reducers.toggleSidebar
})

// rehydrating state on app start: implement here...
const recoverState = (): types.StoreState => ({} as types.StoreState)

const store = createStore(
  rootReducer,
  recoverState()
)

interface Props { }
interface State {
  screen: {
    width: number
    height: number
  }
}

class App extends React.Component<Props, State> {
  public state: State = {
    screen: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  public setScreen = () => {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }

  public componentWillMount() {
    window.onresize = () => {
      this.setScreen()
    }
    store.subscribe(() => {
      this.setScreen()
    })
  }
  
  render() {
    const { screen } = this.state
    const { getState } = store
    const mobile: boolean = screen.width < 992
    const styles: any = {
      appContainer: {
        position: !mobile ? 'fixed' : 'relative',
        width: (!mobile && getState().sidebar.open) ? 'calc(100% - 257px)' : '100%',
        background: 'transparent'
      }
    }
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <BrowserRouter>
            <Routes container={styles.appContainer} />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
