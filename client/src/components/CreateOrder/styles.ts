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
  form: {
    height: 580,
    width: 700,
    padding: 20,
    backgroundColor: "#FBFAFC",
    borderRadius: 15,
    boxShadow: "0px 0px 5px 0px rgba(138,138,138,1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: "min-content",
      padding: 10,
    },
  },
  fields: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  leftFields: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    alignItems: "left",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
  rightFields: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    alignItems: "left",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
  textField: {
    margin: "10px 0",
  },
  bottom: {
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#46D999",
    color: "#201853",
    borderRadius: 15,
    width: "min-content",
    whiteSpace: "nowrap",
    fontSize: "0.65rem",
    "&:hover": {
      backgroundColor: "#6E60FF",
      color: "white",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },
  bigButton: {
    backgroundColor: "#46D999",
    color: "#201853",
    borderRadius: 15,
    width: "min-content",
    whiteSpace: "nowrap",
    fontSize: "1.05rem",
    marginTop: 20,
    "&:hover": {
      backgroundColor: "#6E60FF",
      color: "white",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  formControl: {
    margin: "10px 0",
  },
  title: {
    fontFamily: "Rothek-Bold",
    textAlign: "center",
    color: "#201853",
  },
  loading: {
    color: "#46D999",
    marginTop: 20,
  },
}));
