import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "90vh",
    backgroundColor: "#201853",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FBFAFC",
    width: 800,
    height: 500,
    borderRadius: 15,
    boxShadow: "0px 0px 5px 0px rgba(138,138,138,1)",
    display: "flex",
    flexDirection: "column",
  },
  details: {
      display: 'flex',
      justifyContent: 'space-around',
      maxHeight: '50%',
      overflowX: 'hidden',
      overflow: 'scroll',
  },
  detail: {
      maxWidth: '33%',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '50%',
    overflowX: 'hidden',
    overflow: 'scroll',
    textAlign: 'center',
    paddingLeft: 12,
  },
  listTitle: {
      fontSize: '1.3rem',
  },
  line: {
      maxWidth: '100%',
  },
  item: {
    display: "flex",
    borderBottom: "0.5px solid #d4d4d4",
    cursor: 'auto',
  },
  text: {
      textAlign: 'center',
      width: '33%',
  },
}));
