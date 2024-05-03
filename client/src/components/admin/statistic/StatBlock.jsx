import { Container, Col } from "react-bootstrap";
import './statistic.css'

export default function StatBlock() {
    return (
        <Col xs={2} className="stat-block" style={{backgroundColor: 'red'}}>
            Stat
        </Col>
    );
}