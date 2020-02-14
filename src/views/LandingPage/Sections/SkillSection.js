import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Cloud from  "@material-ui/icons/Cloud";
import Apps from "@material-ui/icons/Apps";
import FilterTiltShift from '@material-ui/icons/FilterTiltShift';


import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function SkillSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What we do</h2>
          <h5 className={classes.description}>
            Our focus is in solution design and development with experience in Project Leadership.
            Highly experienced in Agile Practises including pair programming, scrum, kanban, TDD, CI/CD and
            BDD. Comfortable in developing both Cloud and traditional on-premise architectures.<br/>
            Experience in a wide range of industries including Retail Banking, FX, Media, Utilities.<br/>
          </h5>
          <h2 className={classes.title}>Key Skill Set</h2>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
                title="Cloud"
                description="
                Extensive experience of Amazon AWS, including S3, SQS, DynamoDB (NoSql), Lambda and EC2.
                CloudFormation experience including use of the python Troposphere toolkit. Experience with
                associated technologies such as Dagger.
                Experience of Openshift / Kubernetes Container Platform and Docker.
                "
                icon={Cloud}
                iconColor="info"
                vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
                title="Spring"
                description="
                Primary Java development technology for Green Hills consultancy. Many
                years experience with Spring Boot, Spring REST, Spring Data, Spring Integration. Experience with
                associated technologies such as Hibernate, JMS, AMQP and supporting development toolkits such as Cucumber,
                Jenkins, Docker, github, bitbucket.
                 "
                icon={Apps}
                iconColor="success"
                vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
                title="Agile"
                description="
                Many years experience with agile development practises, including certification as
                Scrum Master. Enthusiastic adopter for practises such as pair programming, scrum,
                kanban, TDD, continuous integration and development and BDD practises such as 3-Amigo workshops.
                "
                icon={FilterTiltShift}
                iconColor="danger"
                vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
