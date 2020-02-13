import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import screenmedia from "assets/img/screenmedia.png";
import waracle from "assets/img/waracle.png";
import bbc from "assets/img/bbc.png";
import hsbc from "assets/img/hsbc.png";

const useStyles = makeStyles(styles);

export default function ClientSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Previous Clients</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={screenmedia} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Screenmedia
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Worked as part of an agile, multi-disciplined team to deliver mobile
                  and web applications to CYBG. Created new micro services for this
                  development using Spring Boot on the Openshift platform. Primary
                  challenge in this development was to ensure availability and reliability
                  in processing large data sets for consumer mobile and web applications.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={waracle} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Waracle
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Worked as sole consultant in an engagement for Scottish Power. Development
                  in new and existing ETL projects for marketing CRM campaigns, while assisting
                  in developing team skills in Agile development and practise. Replaced workflow
                  data transformations, replacing shell scripting with source controlled Groovy
                  components.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={bbc} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                BBC
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Working on the AMP development, involved in all stages of development
                  from 3-amigos to live deployment. Developed a series of inter-connected
                  AWS Lambda and EC2-based services with responsibility to obtain, transform
                  and communicate EPG content for delivery to external Sky, Freeview and
                  Freesat platforms. Primary development in Groovy with AWS service stack
                  definition via the Troposphere. Pair programming / TDD used on all
                  software development in a highly collaborative environment
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={hsbc} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                HSBC
                <br />
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Working as senior consultant in the FX currency risk management application.
                  Primary focus in design, development and testing of new functionality in
                  Spring / java. Led several technical initiatives, including multi-tenancy,
                  Spring Platform upgrade and adoption of Spring Data. Facilitated adoption of
                  git as version control and process system.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
