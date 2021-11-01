import React, {useState, useEffect} from 'react'
import { UseStyles } from '../../orgsdata';
import { Grid } from '@material-ui/core';
import { Organisations2020 } from './orgs2020data';

// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Button } from '@material-ui/core';
// import { maxWidth } from '@mui/system';

import { Card } from 'react-bootstrap';

export default function Orgs2020() {
    const {root, cards, cardWrapper, Media, gridContainer, cardSection} = UseStyles();

    const [state, setState] = useState({
        mobileView: false,
      });

    const { mobileView } = state;

    useEffect(() => {
    const setResponsiveness = () => {
        return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
        window.removeEventListener("resize", () => setResponsiveness());
    };
    }, []);

    const displayDesktop = () => {
        return (
            <div>
                {/* <div Style={{display: "grid"}} className={cardSection}> */}
                <Grid container>
                {Organisations2020.map(orgs => (
                    <Grid item lg={4} md={6} xs={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Card
                        style={
                            {
                                margin: "100px",
                                background: "white",
                                width: "18rem",
                                height: "20rem",
                                border: "50px"
                            }}>
                        <Card.Img
                            style={
                                {

                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                    margin: "10px"
                                    }}
                                    variant="top"
                                    src={orgs.logo} />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    display: "flex",

                                    justifyContent: "center",
                                    alignItems: "end",
                                    fontSize: "25px"
                                         }}>
                                             {orgs.name}
                            </Card.Title>
                            <Card.Subtitle
                                style={{
                                    display: "flex",

                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "20px"
                                }}
                                className="mb-2 text-muted">
                                {orgs.text}
                            </Card.Subtitle>
                            <br/><br/><br/>
                            <Button
                                style={{
                                    background: "#003566",
                                    // left: "20%",
                                    // margin: "5px",
                                    color: "white",
                                    borderRadius: "50px",
                                    padding: "5%",
                                    marginLeft: "20%",
                                    marginRight: "20%",
                                    width: "60%"
                                }}
                                >View Projects</Button>
                        </Card.Body>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            {/* </div> */}


            </div>

        );
      };

    const displayMobile = () => {
        return (
            <div>
                <Grid container spacing={12}>
                {Organisations2020.map(orgs => (
                    <Grid item lg={4} md={6} xs={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Card
                        style={
                            {
                                margin: "56px",
                                background: "white",
                                width: "70%",
                                height: "70%",
                                border: "50px"
                            }}>
                        <Card.Img
                            style={
                                {

                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                    margin: "10px"
                                    }}
                                    variant="top"
                                    src={orgs.logo} />
                        <Card.Body>
                            <Card.Title
                                style={{
                                    display: "flex",

                                    justifyContent: "center",
                                    alignItems: "end",
                                    fontSize: "25px"
                                         }}>
                                             {orgs.name}
                            </Card.Title>
                            <Card.Subtitle
                                style={{
                                    display: "flex",

                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "20px"
                                }}
                                className="mb-2 text-muted">
                                {orgs.text}
                            </Card.Subtitle>
                            <br/><br/><br/>
                            <Button
                                style={{
                                    background: "#003566",
                                    // left: "22%",
                                    marginBottom: "40px",
                                    color: "white",
                                    borderRadius: "50px",
                                    padding: "5%",
                                    marginLeft: "20%",
                                    marginRight: "20%",
                                    width: "60%"
                                }}
                                >View Projects</Button>
                        </Card.Body>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </div>
        );
    };

    return (
        <div className={root}>
            {mobileView ? displayMobile() : displayDesktop()}
        </div>
        )
    }