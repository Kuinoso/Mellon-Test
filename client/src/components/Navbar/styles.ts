import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "10vh",
    backgroundColor: "#201853",
    display: "flex",
    justifyContent: "space-evenly",
  },
  buttons: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 20,
    },
  },
  navButton: {
    textTransform: "none",
    fontSize: "1rem",
    margin: "0 10px",
    color: "white",
    "&:hover": {
      color: "#46D999",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
      margin: "0 5px",
    },
  },
  link: {
    textDecoration: "none",
  },
  logo: {
    width: 150,
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
  },
}));
