import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, teal } from "@material-ui/core/colors";

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: red,
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <TopBar />
      <Single />
    </MuiThemeProvider>
  );
}

export default App;
