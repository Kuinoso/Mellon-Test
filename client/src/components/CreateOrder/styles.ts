import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "90vh",
    backgroundColor: "#201853",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  },
  fields: {
    display: "flex",
    width: "80%",
    margin: "0 auto",
    justifyContent: "space-between",
  },
  leftFields: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    alignItems: "left",
  },
  rightFields: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    alignItems: "left",
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
