import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { STAFFS } from './shared/staffs';
import  StaffList from './components/StaffListComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS
    }
  }
  render() {
    return (
      <div>
        <Navbar dark color='primary'>
            <NavbarBrand>Ứng dụng quản lý nhân viên 1.0</NavbarBrand>
        </Navbar>
          <div className='container-fluid'>
          <StaffList staffs={this.state.staffs} />
          <p>Bấm vào tên nhân viên để xem thông tin</p>
        </div>
      </div>
    )
  }
}

export default App;
