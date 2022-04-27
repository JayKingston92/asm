import React, { Component } from 'react';
import dateFormat from 'dateformat'; 
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';



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

    renderStaff(staff) {
        if (staff != null) {
            return (
                <div className='col-12'>
                    <Card>
                        <CardBody>
                            <CardTitle>Họ và tên: {staff.name}</CardTitle>
                            <CardText>Ngày sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}</CardText>
                            <CardText>Ngày vào công ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}</CardText>
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày phép: {staff.annualLeave}</CardText>
                            <CardText>Số ngày tăng ca: {staff.overTime}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return <div></div>;
        };
    };

    render() {
        const stafflist = this.props.staffs.map((staff) => {
            return (
                <div className={this.state.columnDefault}>
                    <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
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
                <div className='row mt-5'>
                    {this.renderStaff(this.state.onSelectStaff)}
                </div>
            </div>
        )
    }
    
}

export default StaffList;