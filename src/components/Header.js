import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="https://cdn.mos.cms.futurecdn.net/xz4NVQhHaHShErxar7YLn.jpg"
                width="100"
                alt="Tesla Company"
              /> Ứng dụng quản lý nhân viên Tesla 16.8.0
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Trang chủ
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/staffs">
                    <span className="fa fa-solid fa-address-book"></span> Nhân
                    viên
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/department">
                    <span className="fa fa-solid fa-building"></span> Phòng ban
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/salary">
                    <span className="fa fa-solid fa-calculator"></span> Bảng
                    lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        {/* <React.Fragment>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </React.Fragment> */}
      </div>
    );
  }
}

export default Header;
