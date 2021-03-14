import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "90vh",
    backgroundColor: "#201853",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      minHeight: "90vh",
      height: "min-content",
      paddingBottom: 20,
    },
  },
  list: {
    backgroundColor: "#FBFAFC",
    width: 1200,
    height: 500,
    boxShadow: "0px 0px 5px 0px rgba(138,138,138,1)",
    marginTop: 80,
    overflowX: "hidden",
    overflow: "scroll",
    padding: "0 5px",
    paddingLeft: 12,
    [theme.breakpoints.down("xs")]: {
      width: 320,
      marginTop: 20,
    },
  },
  item: {
    display: "flex",
    borderBottom: "0.5px solid #d4d4d4",
  },
  text: {
    width: "20%",
    textAlign: "left",
    padding: "0 10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
      width: "25%",
    },
  },
  text2: {
    width: "30%",
    textAlign: "left",
    padding: "0 10px",
    textTransform: "capitalize",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
      width: "25%",
    },
  },
  title: {
    marginTop: 60,
    fontFamily: "Rothek-Bold",
    textAlign: "center",
    color: "#46D999",
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  error: {
    color: "white",
    fontSize: "2rem",
    marginTop: 100,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      textAlign: "center",
      width: "80%",
    },
  },
}));
