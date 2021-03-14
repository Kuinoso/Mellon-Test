import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "90vh",
    backgroundColor: "#201853",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "min-content",
      paddingBottom: 20,
    },
  },
  card: {
    backgroundColor: "#FBFAFC",
    width: 800,
    height: 500,
    borderRadius: 15,
    boxShadow: "0px 0px 5px 0px rgba(138,138,138,1)",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      width: 320,
      height: "min-content",
    },
  },
  details: {
    display: "flex",
    justifyContent: "space-around",
    maxHeight: "50%",
    overflowX: "hidden",
    overflow: "scroll",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      overflow: "visible",
    },
  },
  detail: {
    maxWidth: "33%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "95%",
      padding: "0 20px",
    },
  },
  list: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "50%",
    overflowX: "hidden",
    overflow: "scroll",
    textAlign: "center",
    paddingLeft: 12,
    [theme.breakpoints.down("xs")]: {
      maxHeight: 200,
    },
  },
  listTitle: {
    fontSize: "1.3rem",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  line: {
    maxWidth: "100%",
  },
  item: {
    display: "flex",
    borderBottom: "0.5px solid #d4d4d4",
    cursor: "auto",
  },
  text: {
    textAlign: "center",
    width: "33%",
  },
}));
