import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardBody, CardText } from "reactstrap";

import { Link } from "react-router-dom";
const BasicSalary = 3000000;
const HourSalary = 200000;
function RenderSalary({ salary, setSalary }) {
  return (
    <Card className="p-2 bg-dark text-white ">
      <CardHeader className="font-weight-bold">
        {" "}
        Mã nhân viên : {salary.id}
      </CardHeader>
      <CardTitle className="pt-3 pl-3 ">Họ tên: {salary.name}</CardTitle>
      <CardBody>
        <CardText> Hệ số lương: {salary.salaryScale}</CardText>
        <CardText> Số ngày tăng ca: {salary.overTime}</CardText>
        <CardText className="alert alert-success font-weight-bold">
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
