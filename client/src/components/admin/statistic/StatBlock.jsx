import { Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './statistic.css'

export default function StatBlock({ id, icon, color, value, description, handleChooseData }) {
    if (!color) color = '#FF0000';
    if (!handleChooseData)
    {
        //remove hover of stat-block
        
    }
    return (
        <Col className={`stat-block ${!handleChooseData ? 'no-hover' : ''}`} onClick={() => {
                handleChooseData && handleChooseData(id, description)
            }}>
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