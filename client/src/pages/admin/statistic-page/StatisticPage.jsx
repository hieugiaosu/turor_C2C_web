import { Container } from "react-bootstrap";
import '../messenger-page/messenger-page.css'
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Row, Col} from 'react-bootstrap'
import { faDollarSign, faScaleBalanced, faMoneyBillTransfer, faCalendarWeek} from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, registerables } from 'chart.js';
import StatBlock from "../../../components/admin/statistic/StatBlock";
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
    <Container>
      


      
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
          <Row className="stat-blocks justify-content-md-center">
              <StatBlock icon={faDollarSign} value={"$13,804"} description={"Total revenue"} />
              <StatBlock icon={faScaleBalanced} value={"$13,804"} description={"Current Balance"} color="#2596be"/>
              <StatBlock icon={faMoneyBillTransfer} value={"$13,804"} description={"Total Withdrawals"} color="#B27300" />
              <StatBlock icon={faCalendarWeek} value={"$13,804"} description={"Today Revenue"} color="#009900" />
          </Row>
        
          <Row style={{justifyContent: 'center', padding: "10px"}}>
            <Col xs={7} className="m-0" style={{padding: "0px 10px 0px 0px"}}>
              <div className="m-0 p-0 white" style={{height: '100%', display: 'flex'}}>
                <MyChart/>
              </div>
            </Col>
            <Col xs={5} className="m-0" style={{padding: "0px 0px 0px 10px"}}>
              <div className="m-0 p-0 white" style={{height: '100%', display: 'flex'}}>
              </div>
            </Col>
          </Row>
            
        </Container>
    );
}