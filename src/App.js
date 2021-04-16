import React from "react";
import Header from "./components/fragments/Header";
import MenuLeft from "./components/fragments/MenuLeft";
import Main from "./components/pages/Main";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import { Toolbar } from "@material-ui/core";
import About from "./components/pages/About";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Header />
        <CssBaseline />
        <MenuLeft />
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
            <Route path={`${process.env.PUBLIC_URL}/About`} component={About} />
            <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}
