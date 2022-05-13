import React from "react";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";
import { Card, CardTitle, CardBody, CardText, CardImg } from "reactstrap";

import { Link } from "react-router-dom";
import "../App.css";

const StaffDetail = (props) => {
  const listStaff = props.staffs;
  const params = useParams();
  const staff = listStaff.find((s) => s.id === parseInt(params.id));
  
  return (
    <div className="col-12">
      <ul className="breadcrumb">
        <li className="breadcrumb__item">
          <span className="breadcrumb__inner">
            <span className="breadcrumb__title">
              <Link to="/staffs">Nhân viên</Link>
            </span>
          </span>
        </li>
        <li className="breadcrumb__item">
          <span className="breadcrumb__inner">
            <span className="breadcrumb__title">{staff.name}</span>
          </span>
        </li>
      </ul>
      <Card>
        <CardBody>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <CardImg
                className="girl1"
                src="https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg"
                alt="staff"
              />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <CardTitle>Họ và tên: {staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>Phòng ban: {staff.department.name}</CardText>
              <CardText>Số ngày phép: {staff.annualLeave}</CardText>
              <CardText>Số ngày tăng ca: {staff.overTime}</CardText>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default StaffDetail;
