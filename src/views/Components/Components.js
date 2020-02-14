import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import {Link} from "react-router-dom";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page


import styles from "assets/jss/material-kit-react/views/components.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";

import SectionSummary from "./Sections/SectionSummary";



const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>

            <Header
                color="transparent"
                fixed
                rightLinks={
                    <List className={classes.list}>
                        <ListItem className={classes.listItem}>
                            <Link to="contact-us" style={{color: '#FFF'}}>
                                <Button
                                    color="transparent"
                                    className={classes.navLink}
                                >
                                    <Icon className={classes.icons}>mail</Icon> Contact Us
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                }
                {...rest}
            />

            <Parallax image={require("assets/img/mntn-3.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Green Hills Software Consultancy</h1>
                                <h3 className={classes.subtitle}>
                                    Software Consultancy services for the Scottish Central Belt
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <SectionSummary/>

                <GridItem md={12}  className={classes.textCenter}>
                    <Link to="landing-page" className={classes.link}>
                        <Button color="grey" size="lg" round>
                            what we do
                        </Button>
                    </Link>
                    <br/><br/><br/><br/>
                </GridItem>

                <div className={classes.section}>
                    <GridContainer justify="center">
                        <GridItem cs={12} sm={12} md={8} >
                            <h2  className={classes.title}>Want to talk?</h2>
                            <h4 className={classes.description}>
                                If you have any questions about our services then
                                please contact us below. We'll get back to you
                                as soon as we can
                            </h4>
                            <br/><br/>
                        </GridItem>
                    </GridContainer>
                </div>
                <GridItem md={12}  className={classes.textCenter}>
                    <Link to="contact-us" className={classes.link}>
                        <Button color="grey" size="lg" round>
                            let's talk
                        </Button>
                    </Link>
                </GridItem>
            </div>
            <Footer/>
        </div>
    );
}
