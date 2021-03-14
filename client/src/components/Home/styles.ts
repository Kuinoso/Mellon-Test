import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "90vh",
    backgroundColor: "#201853",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  leftDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 40px",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      marginTop: 40,
    },
  },
  bottomImages: {
    display: "flex",
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      marginTop: 5,
    },
  },
  imageBlock: {
    margin: "0 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      margin: "0 30px",
    },
  },
  image: {
    width: 150,
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
  },
  imageText: {
    fontFamily: "Rothek-Bold",
    color: "#46D999",
    fontSize: "1.3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  rightDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 40px",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  title: {
    fontFamily: "Rothek-Bold",
    color: "white",
    fontSize: "3rem",
    width: 500,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      width: 300,
    },
  },
  text: {
    fontSize: "1.7rem",
    width: 600,
    textAlign: "center",
    color: "#46D999",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      width: 340,
    },
  },
}));
