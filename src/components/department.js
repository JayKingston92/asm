import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import "../App.css";

class RenderDept extends Component {
  render() {
    return (
      <Card>
        <CardTitle className="text-white bg-warning p-2 font-weight-bold">
          Department: {this.props.dept.name}
        </CardTitle>
        <CardText className="m-2">
          Số lượng NV : {this.props.dept.numberOfStaff}
        </CardText>
      </Card>
    );
  }
}

function Department(props) {
  const departments = props.dept.map((department) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={department.id}>
        <RenderDept dept={department} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row shadow m-3">{departments}</div>
    </div>
  );
}

export default Department;
