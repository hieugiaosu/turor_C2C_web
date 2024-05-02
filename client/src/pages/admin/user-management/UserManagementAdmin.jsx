import React, { useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import "./UserManagerStyle.css";
import TutorListAdmin from "../../../components/admin/userlist/TutorListAdmin";
import ProcessApplication from "../../../components/admin/processAplication/ProcessApplication";
const users = [
  {
    id: 1,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "active",
  },
  {
    id: 2,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "banned",
  },
  {
    id: 3,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "pending",
  },
  {
    id: 1,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "active",
  },
  {
    id: 2,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "banned",
  },
  {
    id: 3,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "pending",
  },
  {
    id: 1,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "active",
  },
  {
    id: 2,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "banned",
  },
  {
    id: 3,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "pending",
  },
  {
    id: 1,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "active",
  },
  {
    id: 2,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "banned",
  },
  {
    id: 3,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "pending",
  },
  // Add more user objects as needed
];
const processUser = [
  {
    id: 3,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "pending",
  },
  {
    id: 3,
    name: "Lê văn A",
    age: 24,
    subject: ["Toán 12", "Lý 12", "Hóa 12"],
    position: "Sinh viên",
    affiliation: "Đại học Bách Khoa TPHCM",
    status: "pending",
  },
];
function UserMangementAdmin() {
  const [subPage, setSubpage] = useState("tutor");
  return (
    <>
      <div className="user-page col-10">
        <Row className="d-flex">
          <Button
            className={`w-auto btn-small mx-2 border rounded-3 ${
              subPage == "tutor" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={(e) => {
              setSubpage("tutor");
            }}
          >
            Danh sách gia sư
          </Button>
          {/* <Button
            className={`w-auto btn-small mx-2 border rounded-3 ${
              subPage == "parent" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={(e) => {
              setSubpage("parent");
            }}
          >
            Danh sách phụ huynh
          </Button> */}
          <Button
            className={`w-auto btn-small mx-2 border rounded-3 ${
              subPage == "submit_form" ? "btn-primary" : "btn-secondary"
            }`}
            onClick={(e) => {
              setSubpage("submit_form");
            }}
          >
            Đơn duyệt gia sư
          </Button>
        </Row>
        {subPage == "tutor" ? (
          <TutorListAdmin data={users}></TutorListAdmin>
        ) : subPage == "parent" ? (
          <div>hi</div>
        ) : (
          <ProcessApplication data={processUser}></ProcessApplication>
        )}
      </div>
    </>
  );
}
export default UserMangementAdmin;
