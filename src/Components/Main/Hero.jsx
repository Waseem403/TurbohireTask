import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import Loader from "./Loader";

//css styles for this component
const useStyles = makeStyles({
  root: {
    marginBottom: "10px",
  },
  main: {
    textAlign: "center",
  },

  chip: {
    borderRadius: "10px",
    fontWeight: "bold",
    padding: "1px 10px",
  },
  divider: {
    maxWidth: 555,
    marginLeft: 40,
  },
});

//Hero(Middle) stateless component
const Hero = () => {
  const classes = useStyles();

  const handleDelete = () => {
    console.log("");
  };

  //returning the component
  return (
    <React.Fragment>
      <CardContent>
        <div className={classes.main}>
          <Typography variant="subtitle1" gutterBottom>
            Candidate Calibration Score
          </Typography>
          <Grid container>
            <Grid item sm={6}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: "#757575", textAlign: "right" }}
              >
                84.0%
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Loader />
            </Grid>
          </Grid>
        </div>
        <Chip
          label="Add Tag"
          onDelete={handleDelete}
          deleteIcon={<AddIcon />}
          className={classes.chip}
        />{" "}
        <Chip
          label="Web Dev..."
          color="primary"
          variant="outlined"
          className={classes.chip}
        />
      </CardContent>
      <Divider className={classes.divider} />
    </React.Fragment>
  );
};

//exporting the component
export default Hero;
