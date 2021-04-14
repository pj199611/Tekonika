import React from "react";
import { Col, Row, Container } from "../Common/Grid";
import Chart from "../../assets/sketch.png";
import Node from "../../assets/node.svg";
import Javascript from "../../assets/javascript.svg";
import { makeStyles } from "@material-ui/core/styles";
import Stigasoft from "./clients-logo/stigasoft.png";
import Sourcefuse from "./clients-logo/sourcefuse.png";
import bikebazaar from "./clients-logo/bikebazaar.svg";
import wheelsemi from "./clients-logo/wheelsemi.png";
import wiziq from "./clients-logo/wiziq-logo.png";
import yuno from "./clients-logo/yuno_logo.png";
import whitehilllogo from "./clients-logo/whitehilllogo.png";
import hiyatri from "./clients-logo/HiYatriLogo.png";
// import aggio from "./clients-logo/aggio.svg";
import "./Clients.css";
import { Brightness1 } from "@material-ui/icons";
// import Slider from "./Slider/Slider";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
 
  
}));
const Clients = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <>
         <Container>
            <Row>
                <Col md={12}>
                    <h2 style =
                    {{ 
                    textAlign:"center",
                     marginTop:"100px",
                     fontSize:"60px",
                     fontWeight:"bolder"
                     }}>
                     Our Journey so far</h2>
                     <h3 style={{ fontSize:"18px",
                      textAlign:"center",marginBottom:"60px"}}>Since 2018, we have helped a number of companies convert their digital 
                     ideas into engaging, feature rich apps</h3>  
                    
                </Col>
            </Row>
        </Container>
    
  
  <div className="container">
    <div className="row">
      <div className="col-md-4">
      <img className="image-logo" src={wheelsemi} alt="wheelsemi" /> 
      </div>
      <div className="col-md-4">
      <img className="image-logo" src={Sourcefuse} alt="sourcefuse" style={{width:"120px"}}/>
      </div>
      <div className="col-md-4">
      <img className="image-logo" src={bikebazaar} alt="bikebazaar" />
      </div>
    </div>
    <div className="row img-space">
      <div className="col-md-4">
      <img className="image-logo" src={wiziq} alt="wiziq"/>
      </div>
      <div className="col-md-4">
      <img className="image-logo" src={yuno} alt="yuno" style={{width:"120px"}}/>
      </div>
      <div className="col-md-4">
      <img className="image-logo-1" src={whitehilllogo} alt="yuno"/>
      </div>
    </div>
    <div className="row img-space1">
      <div className="col-md-4">
      <img className="image-logo" src={hiyatri} alt="hiyatri" style={{width:"250px",height:"60px",marginLeft:"-10px"}}/>
      </div>
      <div className="col-md-4">
      <img className="image-logo" src={Stigasoft} alt="stigasoft" style={{height:"100px",width:"120px"}}/>
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
  </>
    
    </React.Fragment>
  );
};
export default Clients;