import React from 'react';
import {
    MDBMask,
    MDBRow,
    MDBCol,
  } from "mdbreact";

const Section = ({heading,imgUrl,imgAlt,text,buttonText,bg,mode}) => {
  let className = 'py-5 px-5';
  bg === "bg-white" ?  className += ' bg-white':className += ' bg-light-grey';
  return(<div>
    {
      mode === "reverse" ? 
      <section className={className}>
    <MDBRow className="d-flex justify-content-around flex-wrap-reverse">
    <MDBCol
        md="6"
        className=" text-center text-md-left mt-xl-5 "
      >
          <h3 className="h3-responsive font-weight-bolder light-blue-text my-4">
          {heading}           
         </h3>
          <p className="">
          {text}
          </p>
          <button className="button my-4 px-4">{buttonText}</button>
      </MDBCol>
      <MDBCol md="6" xl="5" className="mt-xl-5 ">
          <img
            src={imgUrl}
            alt={imgAlt}
            className="img-fluid"
          />
      </MDBCol>
    </MDBRow>
</section>
      :
     <section className={className}>
    <MDBRow className="d-flex justify-content-around " >
      <MDBCol md="6" xl="5" className="mt-xl-5 mt-md-5">
          <img
            src={imgUrl}
            alt={imgAlt}
            className="img-fluid"
          />
      </MDBCol>
      <MDBCol
        md="6"
        className=" text-center text-md-left mt-xl-5 "
      >
          <h3 className="h3-responsive font-weight-bolder light-blue-text my-4">
          {heading}
         </h3>
          <p >
          {text}
          </p>
          <button className="button my-4 px-4">{buttonText}</button>
      </MDBCol>
    </MDBRow>
</section>
    }
  </div>
   )

  };

export default Section;
