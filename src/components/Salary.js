import React, { useState } from "react";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

import { Link } from "react-router-dom";
const BasicSalary = 3000000;
const HourSalary = 200000;
function RenderSalary({ salary, setSalary }) {
  return (
    <Card>
      <CardTitle className="p-3 bg-white rounded m-2">{salary.name}</CardTitle>
      <CardBody>
        <CardText> Mã nhân viên: {salary.id}</CardText>
        <CardText> Hệ số lương: {salary.salaryScale}</CardText>
        <CardText> Số ngày tăng ca: {salary.overTime}</CardText>
        <CardText className="bg-light p-2 shadow">
          Lương:{" "}
          {(
            salary.salaryScale * BasicSalary +
            salary.overTime * HourSalary
          ).toFixed(0)}
        </CardText>
      </CardBody>
    </Card>
  );
}

const Salary = (props) => {
  const [sortSalary, setSortSalary] = useState(false);
  const salary = props.sal.map((s) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={s.id}>
        <RenderSalary salary={s} />
      </div>
    );
  });
  return (
    <div className="container">
      
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
              <span className="breadcrumb__title">Bảng lương</span>
            </span>
          </li>
        </ul>
      
      <div className="row"></div>
      {/* <button
        className="btn btn-danger"
        onClick={() => setSortSalary(!sortSalary)}
      >
        Sắp xếp theo Hệ số lương
      </button> */}
      <div className="row shadow mb-3">{salary}</div>
    </div>
  );
};

export default Salary;
