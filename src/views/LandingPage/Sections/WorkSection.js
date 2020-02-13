import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Prior History</h2>
          <h3 className={classes.title}>JP Morgan</h3>
          <h4 className={classes.description}>
            Prior to Green Hills, we have experience with introducing
            scrum, quality improvements and continuous integration
            practices with JP Morgan in Glasgow. Initiatives made
            include introducing automated unit testing, code inspection
            and quality metrics tracking within the team to improve software
            quality. While at JP Morgan also lead initiative to build a new
            team to re-architect the mature ‘iBanker’ Investment Banking CRM
            application to enable a more responsive delivery for new
            business functionality. Planned and implemented the migration
            and re-architecture from an expensive legacy platform while
            continuing to deliver new functionality for the emerging mobile
            platform.
          </h4>
          <h3 className={classes.title}>NCR</h3>
          <h4 className={classes.description}>
            Also have many prior years experience in Solutions Architecture
            from time spent with NCR in Dundee. Defined the current
            enterprise management system for NCR. Working with Business
            Analysts, defined the requirements for NCR's next generation
            Systems Management Solution. Defined a technology platform of
            Spring, JPA/Hibernate, Spring Integration/AMQP for a platform
            independent, scalable service architecture for the Incident
            Management, Inventory and Analytics Features. Directed four
            development groups in India, UK & USA in their Agile Development.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
