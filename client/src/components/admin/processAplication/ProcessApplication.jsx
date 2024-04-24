import { Row, Form, Button } from "react-bootstrap";
import Application from "./Application";
export default function ProcessApplication({ data }) {
  return (
    <>
      <Form className="d-flex mt-3">
        <Form.Control
          placeholder="search"
          className="rounded-4 border w-auto mx-2"
        ></Form.Control>
        <Button
          className="w-auto btn-small mx-0"
          style={{ backgroundColor: "#1d2026" }}
        >
          <span className="material-symbols-outlined p-0">search</span>
        </Button>
      </Form>
      <Row className="text-start mt-2 mx-2 text-secondary">
        Có tổng cộng {data.length} đơn xét duyển chờ trên hệ thống
      </Row>
      {data.map((item) => (
        <Application user={item}></Application>
      ))}
      <Row className="vh-100"></Row>
    </>
  );
}
