import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

//css styles for this component
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 595,
    backgroundColor: theme.palette.background.paper,
  },
  listItemText: {
    fontSize: "2em", //Insert your required size
    fontWeight: "bold",
    color: "red",
  },
  divider: {
    marginLeft: 40,
  },
}));

//Header stateless component
const Header = () => {
  const classes = useStyles();

  //returning the component
  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Checkbox
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant="h5">Razikhrazi</Typography>}
          secondary={
            <Typography
              variant="subtitle2"
              gutterBottom
              style={{ color: "#589fdb", fontWeight: "bold" }}
            >
              Application Developer
            </Typography>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" className={classes.divider} />
    </List>
  );
};

//exporting the header component
export default Header;
