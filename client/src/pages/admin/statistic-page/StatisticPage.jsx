import { Container } from "react-bootstrap";
import '../messenger-page/messenger-page.css'
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Row, Col} from 'react-bootstrap'

import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const MyChart = () => {
  const [data] = useState({
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(71, 225, 167, 0.5)',
        borderColor: 'rgb(71, 225, 167)',
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  });

  return (
    <Container style={{width:'70%'}}>
      <h3 className="mt-5">Line chart</h3>
      <Line data={data} options={{ responsive: true,scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                }
            }
        } }} />
    </Container>
  );
};



export default function StatisticPage() {
    return (
        <Container className='page'>
            <Container className="block-statistic blue">Stat</Container>
            <Row style={{justifyContent: 'center'}}>
                <Col xs = {6} style={{marginLeft: '10px', marginRight: '10px', backgroundColor: 'white'}}>
                    <MyChart />
                </Col>
                <Col xs={4}
                    style={{ marginLeft: '10px', marginRight: '10px', backgroundColor: 'white' }}>
                </Col>
            </Row>
            
        </Container>
    );
}