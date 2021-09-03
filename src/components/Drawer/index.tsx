import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { useStyles } from "./styles";

interface Props {
  children: React.ReactNode
}

export default forwardRef((props: Props, ref) => {
  const [open, setOpen] = useState<boolean>(false)
  const classes = useStyles();

  useImperativeHandle(ref, () => ({
    open: () => {
      setOpen(true)
    },
    close: () => {
      setOpen(false)
    }
  }));

  return (<>
    <Drawer anchor="right" open={open}
      onClose={(e:any) => {
        setOpen(false)
        e.stopPropagation();
      }}
      classes={{
        paper: classes.paper
      }}
      className={classes.root}
    >
      {props.children}
    </Drawer>
  </>)
});