import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBTooltip
} from "mdbreact";

export default class BgSection extends React.Component {
  constructor(props) {
      
    super(props);
    this.state = {
         collapsed: false
    };
  }

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "white" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
          <div>
            <MDBNavbar
              color="white"
              light
              expand="md"
              fixed="top"
              scrolling
            >
              <MDBContainer>
                <MDBNavbarBrand href="#">
                <img src="/images/logo-1.jpg" height="35" alt="" />
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav  left>
                    <MDBNavItem >
                      <MDBNavLink to="#!">Clinical</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Billing</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Engage</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Solutions</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Doctors</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Practice Managers</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Billers</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Billing Companies</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Your Speiality</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Products</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">EHR/EMR</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Practice Management</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Medical Billing Services</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Patient Engagement</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Analytics</MDBDropdownItem>
                  <MDBDropdownItem href="#!">TeleMedicine</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Analytics</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Mobile Apps</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
                      <MDBNavLink to="#!">Resources</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">About Us</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    {/* <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem> */}
                    <button className="button button--secondary px-4">Request a Demo</button>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <strong>
                    <h2 className="h2-responsive font-weight-bold mt-sm-5">
                    The Power of Better Outcomes – for Your Patients & Your Business
                    </h2>
                    </strong>
                    <hr className="warning-color accent-2" />
                    <h6 className="mb-4">
                    Drive better outcomes across the clinical, operational
                     and financial aspects of your business. Save more
                      lives, operate with maximum efficiency and optimize
                       payment revenue with MEDESCOPE software solutions
                        covering the span from dispatch to discharge.
                    </h6>
                    <button className="button button--secondary px-4">Get Started</button>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="/images/zoll-home-page-hero-retina-8.png"
                      alt="zoll-home-page-hero-retina-8"
                      height="400"
                      width="100%"
                      className=""
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}
