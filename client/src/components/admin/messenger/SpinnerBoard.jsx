import { Container, Spinner } from "react-bootstrap";

export default function SpinnerBoard() {
    return (
        <>
        <Container style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
        </>
    );
}