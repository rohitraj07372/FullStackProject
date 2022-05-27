import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    textAlign: "center",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className="Footer">
      <AppBar
        style={{ background: "#05314e" }}
        position="static"
        color="primary"
      >
        <Container maxWidth="md">
          <Toolbar className={classes.footer}>
            <Typography variant="body1" color="inherit" align="center">
              <a href="#">Privacy Policy</a> | &#169; HighRadius Corporation.
              All rights reserved.
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
