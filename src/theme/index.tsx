import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {
  cyan700,
  pinkA200,
  teal500,
  grey300, grey400, grey700, grey900,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

const muiTheme = getMuiTheme({
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: grey900,
    primary2Color: cyan700,
    primary3Color: pinkA200,
    accent1Color: teal500,
    accent2Color: grey300,
    accent3Color: grey400,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: fullBlack,
    disabledColor: fade(grey700, 0.3),
    pickerHeaderColor: grey900,
    clockCircleColor: fade(teal500, 0.07),
    shadowColor: fullBlack
  },
  appBar: {
    color: white
  }
})

export default muiTheme