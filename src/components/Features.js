import React from 'react';
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Features = () => (
  <section className="text-center my-5 px-5">
  <h2 className="h2-responsive  light-blue-text font-weight-bolder my-3">
    The Medescope Platform
  </h2>
  <p className="lead grey-text w-responsive mx-auto mb-5">
  Medescope delivers the first and only complete technology platform purpose-built to meet the needs of independent practices.
   Now, physicians can effortlessly manage all major functions of their practice through one intuitive platform.
  </p>
  <MDBRow>
    <MDBCol md="4">
      <MDBIcon icon="medkit" size="3x" className=" light-blue-text" />
      <h5 className="h5-responsive font-weight my-4 light-blue-text">Built for your independent practice.</h5>
      <p className="grey-text mb-md-0 mb-5">
      Medescope is purpose-built for the unique needs of independent practices, avoiding the typical complex,
       time-consuming, and costly functionality you don’t need.
      </p>
    </MDBCol>
    <MDBCol md="4">
      <MDBIcon icon="heartbeat" size="3x" className=" light-blue-text" />
      <h5 className=" h5-responsive font-weight my-4 light-blue-text">Designed to be friendly, flexible</h5>
      <p className="grey-text mb-md-0 mb-5">
      Medescope includes free support,
       free onboarding, free training, and clear and simple pricing that ensures you know exactly what things cost.
      </p>
    </MDBCol>
    <MDBCol md="4">
      <MDBIcon  icon="check-double" size="3x" className=" light-blue-text" />
      <h5 className=" h5-responsive font-weight my-4 light-blue-text">Committed to your success</h5>
      <p className="grey-text mb-md-0 mb-5">
      Medescope's goal is to enable your success by helping you and 
      your staff make the right decisions and take the right steps to deliver results.
      </p>
    </MDBCol>
  </MDBRow>
</section>

);

export default Features;
