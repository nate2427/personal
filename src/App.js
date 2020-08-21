import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Modules/Landing/landing";
import { Paper, ThemeProvider, createMuiTheme } from "@material-ui/core";

export const ThemeContext = React.createContext();

export default function App() {
  const [darkModeOn, setDarkModeOn] = React.useState(false);
  const theme = getTheme({});
  function getTheme(theme) {
    return createMuiTheme({
      palette: {
        type: darkModeOn ? "dark" : "light",
        primary: {
          main: darkModeOn ? "#242f46" : "#495F8C",
        },
        secondary: {
          main: darkModeOn ? "#792e02" : "#e15505",
        },
        background: {
          paper: "#242f46",
        },
        text: {
          primary: "#f5f5f5",
        },
      },
      typography: {
        fontFamily: `"Oswald", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
      },
    });
  }
  console.log(theme);
  return (
    <ThemeContext.Provider
      value={{ darkModeOn: darkModeOn, setDarkModeOn: setDarkModeOn }}
    >
      <ThemeProvider theme={theme}>
        <Paper square style={{ height: "100vh" }}>
          <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          </Router>
        </Paper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
