import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//css styles for this component
const useStyles = makeStyles((theme) => ({
  leftcontent: {
    paddingLeft: "5px",
  },
  rightcontent: {
    paddingRight: "5px",
  },
  spancontent: {
    fontWeight: "bold",
    color: "blue",
  },
}));

//Bottom stateless component
const Bottom = () => {
  const classes = useStyles();

  //returning the component
  return (
    <CardActions>
      <Grid container justify="space-between">
        <Typography
          variant="caption"
          display="block"
          color="textSecondary"
          gutterBottom
          className={classes.leftcontent}
        >
          2 activities since last visit
        </Typography>
        <Typography
          variant="caption"
          display="block"
          align="right"
          color="textSecondary"
          gutterBottom
          className={classes.rightcontent}
        >
          Uploaded <span className={classes.spancontent}>7 days ago</span>
        </Typography>
      </Grid>
    </CardActions>
  );
};

//exporting the Bottom component
export default Bottom;
