import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

//custom component importing
import Header from "./Header";
import Hero from "./Hero";
import Bottom from "./Bottom";
import Actiobbuttons from "./Actionbuttons";

//css styles for this component
const useStyles = makeStyles({
  root: {
    borderRadius: "10px",
    width: "75%",
  },
  main: {
    marginLeft: "23%",
  },
});

//Main stateless component
const Main = () => {
  const classes = useStyles();
  //returning the component
  return (
    <Container maxWidth="md" className={classes.main}>
      <Card className={classes.root}>
        <Grid container>
          <Grid item md={11}>
            <Header />
            <Hero />
            <Bottom />
          </Grid>
          <Grid item md={1}>
            <Actiobbuttons />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
//exporting the component
export default Main;
