import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  content: {
    marginTop: theme.spacing(8)
  }
}));
const DashBoard = props => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              sessionStorage.removeItem("userInfo");
              props.history.go("/");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <Box my={2}>
          <h1>Hello {props?.user?.token?.name}!</h1>
        </Box>
      </Container>
    </>
  );
};

export default withRouter(DashBoard);
