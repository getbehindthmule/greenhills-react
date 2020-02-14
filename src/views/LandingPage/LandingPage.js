import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import SkillSection from "./Sections/SkillSection.js";
import ClientSection from "./Sections/ClientSection.js";
import HistorySection from "./Sections/HistorySection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Parallax filter image={require("assets/img/mntn-9.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>How we can help.</h1>
              <h4>
                  Green Hills can provide a range of services to help with
                  your software development. With experience in all aspects of development from
                  Solutions Architecture and Design, Agile Development, Software Development
                  to Project Management, we can bring these skills to your project.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SkillSection />
          <ClientSection />
          <HistorySection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
