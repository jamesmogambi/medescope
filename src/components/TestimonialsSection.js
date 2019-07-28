import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTestimonial, MDBAvatar,  MDBIcon } from "mdbreact";

const TestimonialsSection = () => (
    <MDBContainer>
    <section className="team-section text-center my-5">
        <h3 className="h3-responsive  light-blue-text my-5">
          Hear From Our <strong>Customers</strong>
         </h3>
        <p className="font-weight-normal">
       <MDBIcon icon="quote-left" className="pr-2 light-blue-text" />
       Lorem ipsum dolor sit amet, consectetur adipisicing
       elit. Quod eos id officiis hic tenetur.
       <MDBIcon icon="quote-right light-blue-text" className="pr-2" />
      </p>
      <h5 className=" h5-responsive font-weight-bold mt-4">Jamie Chebra, EMS Director | JFK EMS</h5>
      </section>
  </MDBContainer>
);

export default TestimonialsSection;
