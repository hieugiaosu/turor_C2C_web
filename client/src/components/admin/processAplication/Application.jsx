import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

export default function Application({ user }) {
  const getStatusStyle = (status) => {
    const base = " w-auto text-white px-3 me-3 rounded-pill py-1";
    if (status == "active") return "bg-success" + base;
    else if (status == "pending") return "bg-secondary" + base;
    else if (status == "banned") return "bg-danger" + base;
  };
  const [detail, setDetail] = useState(false);
  return (
    <>
      <Row onClick={() => setDetail(!detail)} className="my-1">
        <Container className="ms-3 user-item border border-2 rounded-pill">
          <Row className="mt-2 mb-2">
            <Col xs="6" className="text-start">
              <span className="fs-5 fw-bold orange me-2 ms-2">
                {user.name.toUpperCase()}
              </span>
              <span className="text-secondary">{user.subject.join(", ")}</span>
            </Col>
            <Col xs="6" className="text-end">
              <span className={getStatusStyle(user.status)}>{user.status}</span>
            </Col>
          </Row>
          {detail ? (
            <>
              <Row className="mb-2">
                <Col
                  xs="1"
                  className="text-start ms-3 p-0 text-secondary fw-bold"
                >
                  {user.position}
                </Col>
                <Col xs="2" className="text-start p-0 text-secondary">
                  {user.age} tuổi
                </Col>
                <Col xs="8" className="text-end ms-5">
                  <Button
                    onClick={(e) => {}}
                    className="w-auto text-white px-3 me-3 rounded-pill py-1 btn-success"
                  >
                    Duyệt
                  </Button>
                  <Button
                    onClick={(e) => {}}
                    className="w-auto text-white px-3 me-3 rounded-pill py-1 btn-danger"
                  >
                    Từ chối
                  </Button>
                </Col>
              </Row>
              <Row className="mb-3 text-secondary text-start ms-3">
                {user.affiliation}
              </Row>
            </>
          ) : (
            <></>
          )}
        </Container>
      </Row>
    </>
  );
}
