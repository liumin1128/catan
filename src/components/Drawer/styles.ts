import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      // backgroundColor: "red",
    },
    paper: {
      width: '100%',
      maxWidth: 200,
      // backgroundColor:"transparent",
      backgroundColor:"rgba(255,255,255,0.3)",
    }
  })
);
