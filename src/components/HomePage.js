import React from 'react';
import BgSection from './BgSection';
import Footer from './Footer';
import Features from './Features';
import Section from './Section';
import TestimonialsSection from './TestimonialsSection';
import sectionData from '../fixtures/sections';

const HomePage = (props) => (
  <div>
    <BgSection/>
    <Features/>
    <Section {...sectionData[0]}/>
    <Section {...sectionData[1]}/>
    <Section {...sectionData[2]}/>
    <TestimonialsSection />
    <Footer/>
  </div>
);

export default HomePage;
