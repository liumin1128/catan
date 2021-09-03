import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width:'100vw',
      height: '100vh',
    },
    button: {
      position: 'fixed',
      top: 64,
      height: 64
    }
  })
);
