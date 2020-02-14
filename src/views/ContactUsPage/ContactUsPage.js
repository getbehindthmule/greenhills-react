import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/mntn-6.jpg";
import Phone from '@material-ui/icons/Phone';
import Mail from '@material-ui/icons/Mail';


const useStyles = makeStyles(styles);

export default function ContactUsPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center"
                }}
            >
                <div className={classes.container}>
                    <GridContainer justify="center">

                        <GridItem xs={12}>
                            <Card className={classes[cardAnimaton]}>
                                <CardHeader color={"success"}>Contact Us</CardHeader>
                                <CardBody>
                                    {/*<div className={classes.section}>*/}
                                    {/*    <div className={classes.container}>*/}
                                            <div id="nav-tabs">
                                                <GridContainer>
                                                    <GridItem xs={12} sm={12} >
                                                        <CustomTabs
                                                            headerColor="info"
                                                            tabs={[
                                                                {
                                                                    tabName: "Call us",
                                                                    tabIcon: Phone,
                                                                    tabContent: (
                                                                        <div>
                                                                            <p>
                                                                                Need to talk urgently? Call our principal consultant, Gerard Savage,
                                                                                on the following phone number for questions about the services we provide.
                                                                            </p>
                                                                            <p>
                                                                                <b>074 1500 1600</b>
                                                                            </p>
                                                                        </div>
                                                                    )
                                                                },
                                                                {
                                                                    tabName: "Email us",
                                                                    tabIcon: Mail,
                                                                    tabContent: (
                                                                        <div>
                                                                            <p>
                                                                                No time to call? You can email us with any follow up questions on the range of
                                                                                services, skills and experience we can provide at the address below                                                                                at the address below.
                                                                            </p>
                                                                            <p>
                                                                                <b>contact@greenhillsconsultancy.co.uk</b>
                                                                            </p>
                                                                        </div>
                                                                    )
                                                                }
                                                            ]}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>

                                </CardBody>

                            </Card>
                        </GridItem>
                    </GridContainer>

                </div>

                <Footer/>
            </div>
        </div>
    );
}
