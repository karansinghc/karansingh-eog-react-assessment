import React from "react";
import createStore from "./store";
import { Provider } from "react-redux";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Dronedata from "./components/dronedata";

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(51, 117, 229, 0.93)"
    },
    secondary: {
      main: "rgb(255,255,255)"
    },
    background: {
      main: "rgb(255,255,255)"
    }
  }
});

const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Wrapper>
        <Header />
        <Dronedata />
      </Wrapper>
    </Provider>
  </MuiThemeProvider>
);

export default App;
