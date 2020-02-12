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
import HeaderLinks from "components/Header/HeaderLinks.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import landing from "assets/img/what-we-do-updated.jpg";


const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>

            <Parallax image={require("assets/img/mntn-3.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>Green Hills Software Consultancy</h1>
                                <h3 className={classes.subtitle}>
                                    Software Consultancy services for the Scottish central belt
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <GridItem md={12} className={classes.textCenter}>
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
                        {/*<Button color="primary" size="lg" simple>*/}
                        {/*    click for details*/}
                        {/*</Button>*/}
                    </Link>
                </GridItem>
                <GridItem md={12} className={classes.textCenter}>
                    <Link to="landing-page" className={classes.link}>
                        <Button color="primary" size="lg" simple>
                            what we do
                        </Button>
                    </Link>
                </GridItem>
            </div>

            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem cs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Want to talk?</h2>
                        <h4 className={classes.description}>
                            If you have any questions about our services then
                            please contact us below to talk. We'll get back to you
                            as soon as we can
                        </h4>
                        <form>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Your Name"
                                        id="name"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Your Email"
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                    />
                                </GridItem>
                                <CustomInput
                                    labelText="Your Message"
                                    id="message"
                                    formControlProps={{
                                        fullWidth: true,
                                        className: classes.textArea
                                    }}
                                    inputProps={{
                                        multiline: true,
                                        rows: 5
                                    }}
                                />
                                <GridContainer justify="center">
                                    <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                                        <Button color="primary">Send Message</Button>
                                    </GridItem>
                                </GridContainer>
                            </GridContainer>
                        </form>
                    </GridItem>
                </GridContainer>
            </div>
            <Footer/>
        </div>
    );
}
