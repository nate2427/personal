import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Componemts/Landing/landing";
import { Paper, ThemeProvider, createMuiTheme } from "@material-ui/core";

const ThemeContext = React.createContext();

export default function App() {
  const [darkModeOn, setDarkModeOn] = React.useState(true);
  const theme = createMuiTheme({
    palette: {
      type: darkModeOn ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider
      value={{ darkModeOn: darkModeOn, setDarkModeOn: setDarkModeOn }}
    >
      <ThemeProvider theme={theme}>
        <Paper square style={{ minHeight: "100vh" }}>
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
