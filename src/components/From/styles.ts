import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    items: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: 16
    },
    item: {
      width:'36px',
      height: '36px',
      // border: '1px solid red'
    },
  })
);
