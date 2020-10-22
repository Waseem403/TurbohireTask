import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";

//css styles for this component
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    alignItems: "center",
    height: "100%",
  },
  buttons: {
    marginTop: theme.spacing(2.5),
    marginLeft: theme.spacing(0.5),
    color: "#9e9e9e",
  },
}));

//ActionButtons stateless component
function Actionbuttons() {
  const classes = useStyles();

  //returning the component
  return (
    <div className={classes.root}>
      <IconButton className={classes.buttons} aria-label="delete">
        <MoreVertIcon />
      </IconButton>
      <br />
      <IconButton className={classes.buttons} aria-label="delete">
        <ChatIcon />
      </IconButton>
      <br />
      <IconButton className={classes.buttons} aria-label="add an alarm">
        <MailOutlineIcon />
      </IconButton>
      <br />
      <IconButton className={classes.buttons} aria-label="add to shopping cart">
        <ThumbDownAltOutlinedIcon />
      </IconButton>
    </div>
  );
}

//exporting the actionbutton component
export default Actionbuttons;
