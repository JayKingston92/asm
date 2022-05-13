import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, CardImg } from 'reactstrap';
import '../App.css';



class StaffList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onSelectStaff: null,
            columnDefault: 'col-12 col-md-6 col-lg-4'
        };
    }

    onStaffSelect(staff) {
        this.setState({
                onSelectStaff: staff
        });
    }

    onColumnSelect(col) {
        this.setState({
            columnDefault: col
        });
    }

    

    render() {
        const stafflist = this.props.staffs.map((staff) => {
            return (
              <div className={this.state.columnDefault}>
               
                  <Card key={staff.id}>
                    <CardBody>
                        <Link to={"/staffs/" + staff.id}>
                        <CardImg className="girl" src="https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg" alt="staff"/>
                        </Link>
                        <CardTitle className='stl'>{staff.name}</CardTitle>
                    </CardBody>
                  </Card>
              </div>
            );
        });
        
        return (
            <div className='container'>
                <div className='row m-3'>
                    <button onClick={() => this.onColumnSelect('col-md-2 mt-1')} className='btn btn-warning mr-3'> 6 cột</button>
                    <button onClick={() => this.onColumnSelect('col-md-3 mt-1')} className='btn btn-warning mr-3'> 4 cột</button>
                    <button onClick={() => this.onColumnSelect('col-md-6 mt-1')} className='btn btn-warning mr-3'> 2 cột</button>
                    <button onClick={() => this.onColumnSelect('col-md-12 mt-1')} className='btn btn-warning mr-3'> 1 cột</button>
                </div>
                <div className='row'>{stafflist}</div>
            </div>
        )
    }
    
}

export default StaffList;
