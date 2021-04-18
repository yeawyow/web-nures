import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  imag: {
    padding: theme.spacing(2),
    textAlign: "left",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
export default function Header() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Paper className={classes.imag}>
            <img src={`${process.env.PUBLIC_URL}/images/main/header.png`} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
