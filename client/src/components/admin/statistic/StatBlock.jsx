import { Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './statistic.css'

export default function StatBlock({ icon, color, value, description }) {
    if (!color) color = '#FF0000';
    return (
        <Col className="stat-block">
            <Container className="m-1 p-1 d-flex"
                style={{
                    alignItems: 'center', justifyContent: 'center',
                    backgroundColor: '#FFEEE8', height: "75px", width: "75px"}}>
                <FontAwesomeIcon icon={icon} size="3x" style={{color: color}} />
            </Container>
            <Container className="m-1 p-0 d-block"
                style={{ alignItems: 'center', justifyContent: 'center', width: "70%", height: "75px" }}>
                <Container className="p-0 d-flex w-100 h-50"
                    style={{ alignItems: 'center', justifyContent: 'center', fontSize: "30px" }}>{value}</Container>
                <Container className="p-0 d-flex w-100 h-50"
                    style={{ alignItems: 'center', justifyContent: 'center', color: '#4E5566' }}>{description}</Container>
            </Container>
        </Col>
    );
}