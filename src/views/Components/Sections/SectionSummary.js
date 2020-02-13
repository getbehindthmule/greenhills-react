import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import landing from "assets/img/what-we-do-updated.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionSummary() {
  const classes = useStyles();
  return (
      <div className={classes.section}>
          <div className={classes.container}>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12}>
                      <Link to="landing-page" className={classes.link}>
                          <img
                              src={landing}
                              alt="..."
                              className={
                                  classes.imgRaised +
                                  " " +
                                  classes.imgRounded +
                                  " " +
                                  classes.imgFluid
                              }
                          />
                      </Link>
                  </GridItem>
              </GridContainer>
          </div>
      </div>
  );
}
