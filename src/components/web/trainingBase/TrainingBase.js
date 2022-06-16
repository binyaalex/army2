import React from "react";
import { Container } from "react-bootstrap";
import BlogSquareList from "./BlogSquare/BlogSquareList";
import DoctorListSqaure from "./DoctorListSquare/DoctorListSqaure";
import Banner from "./banner/Banner";
import DepartmentsList from "./departmentsList/DepartmentsList";
import ServicesSqaureList from "./servicesSqaure/ServicesSqaureList";

import "./TrainingBase.css";

const TrainingBase = () => {
  return (
    <>
      <div className="hospitalWebPages rtl">
        <Container>
          <Banner />
          <DepartmentsList />
          <DoctorListSqaure />
          <ServicesSqaureList />
          <BlogSquareList />
        </Container>
      </div>
    </>
  );
};

export default TrainingBase;
