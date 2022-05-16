import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DEPARTMENTS, STAFFS } from "./shared/staffs";
import StaffList from "./components/StaffListComponent";
import StaffDetail from "./components/StaffDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Department from "./components/department";
import Salary from "./components/Salary"

import "./App.css";

function App() {
  const [nhanvien, setNhanvien] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS,
  });
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container-fluid">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/staffs" replace={true} />}
            />
            <Route
              path="staffs"
              element={<StaffList staffs={nhanvien.staffs} />}
            />
            <Route
              path="staffs/:id"
              element={<StaffDetail staffs={nhanvien.staffs} />}
            />
            <Route
              path="/department"
              element={<Department dept={nhanvien.departments} />}
            />
            <Route
              path="/salary"
              element={<Salary sal={nhanvien.staffs} />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
