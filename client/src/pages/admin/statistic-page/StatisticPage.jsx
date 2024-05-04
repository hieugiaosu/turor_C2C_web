import { Container } from "react-bootstrap";
import '../messenger-page/messenger-page.css'
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Row, Col} from 'react-bootstrap'
import { faDollarSign, faScaleBalanced, faMoneyBillTransfer, faCalendarWeek} from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, registerables } from 'chart.js';
import StatBlock from "../../../components/admin/statistic/StatBlock";
ChartJS.register(...registerables);

const data1 = [1486, 1913, 1293, 513, 1272, 470, 1302, 2167, 2591, 936, 145, 869, 2557, 1199, 2141, 583, 649, 434, 1592, 1486, 939, 2856, 981, 2941, 1410, 399, 1633, 2333, 2316, 2751];
const data2 = [2038, 480, 436, 1519, 991, 2588, 1489, 557, 865, 2669, 170, 1445, 799, 645, 1345, 1430, 174, 837, 2855, 291, 2083, 239, 351, 915, 1669, 2656, 2278, 1218, 470, 916]
const data3 = [2489, 1020, 966, 2866, 200, 2385, 2065, 2082, 1728, 2517, 2556, 2186, 2734, 2096, 941, 2534, 2643, 1804, 616, 2573, 502, 1690, 2985, 2094, 744, 1717, 2183, 1715, 395, 189]
const data4 = [2032, 1550, 1837, 1791, 1919, 1429, 1811, 186, 2788, 2342, 573, 68, 1277, 221, 2559, 251, 2730, 765, 2777, 652, 222, 1290, 278, 2771, 204, 1307, 2569, 1061, 1803, 1855]

const MyChart = ({data}) => {
  return (
    <Container>
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
    const [data, setData] = useState({
      labels: ['04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08', '04/09', '04/10', '04/11', '04/12', '04/13', '04/14', '04/15', '04/16', '04/17', '04/18', '04/19', '04/20', '04/21', '04/22', '04/23', '04/24', '04/25', '04/26', '04/27', '04/28', '04/29', '04/30'],
      datasets: [
        {
          label: 'Total revenue 04/2024',
          backgroundColor: 'rgba(194, 116, 161, 0.5)',
          borderColor: 'rgb(194, 116, 161)',
          data: data1,
        },
      ],
    });
  
  const handleChooseData = (id, name) => {
    if (!name) name = 'Total revenue';
    switch (id)
    {
      case 1:
      default:
        setData({
        labels: ['04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08', '04/09', '04/10', '04/11', '04/12', '04/13', '04/14', '04/15', '04/16', '04/17', '04/18', '04/19', '04/20', '04/21', '04/22', '04/23', '04/24', '04/25', '04/26', '04/27', '04/28', '04/29', '04/30'],
        datasets: [
          {
            label: name + ' 04/2024',
            backgroundColor: 'rgba(194, 116, 161, 0.5)',
            borderColor: 'rgb(194, 116, 161)',
            data: data1,
          },
        ],
        })
        break;
      case 2:
        setData({
        labels: ['04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08', '04/09', '04/10', '04/11', '04/12', '04/13', '04/14', '04/15', '04/16', '04/17', '04/18', '04/19', '04/20', '04/21', '04/22', '04/23', '04/24', '04/25', '04/26', '04/27', '04/28', '04/29', '04/30'],
        datasets: [
          {
            label: name + ' 04/2024',
            backgroundColor: 'rgba(194, 116, 161, 0.5)',
            borderColor: 'rgb(194, 116, 161)',
            data: data2,
          },
        ],
        })
        break;
      case 3:
        setData({
        labels: ['04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08', '04/09', '04/10', '04/11', '04/12', '04/13', '04/14', '04/15', '04/16', '04/17', '04/18', '04/19', '04/20', '04/21', '04/22', '04/23', '04/24', '04/25', '04/26', '04/27', '04/28', '04/29', '04/30'],
        datasets: [
          {
            label: name + ' 04/2024',
            backgroundColor: 'rgba(194, 116, 161, 0.5)',
            borderColor: 'rgb(194, 116, 161)',
            data: data3,
          },
        ],
        })
        break;
      case 4:
        setData({
        labels: ['04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04/08', '04/09', '04/10', '04/11', '04/12', '04/13', '04/14', '04/15', '04/16', '04/17', '04/18', '04/19', '04/20', '04/21', '04/22', '04/23', '04/24', '04/25', '04/26', '04/27', '04/28', '04/29', '04/30'],
        datasets: [
          {
            label: name + ' 04/2024',
            backgroundColor: 'rgba(194, 116, 161, 0.5)',
            borderColor: 'rgb(194, 116, 161)',
            data: data4,
          },
        ],
        })
        break;
    }
    }

    return (
        <Container className='page'>
          <Row className="stat-blocks justify-content-md-center">
              <StatBlock id={1} icon={faDollarSign} value={"$" + data1[data1.length - 1].toString()} description={"Total revenue"} handleChooseData={handleChooseData} />
              <StatBlock id={2} icon={faScaleBalanced} value={"$" + data2[data2.length - 1].toString()} description={"Current Balance"} color="#2596be" handleChooseData={handleChooseData}/>
              <StatBlock id={3} icon={faMoneyBillTransfer} value={"$" + data3[data3.length - 1].toString()} description={"Total Withdrawals"} color="#B27300" handleChooseData={handleChooseData} />
              <StatBlock id={4} icon={faCalendarWeek} value={"$" + data4[data4.length - 1].toString()} description={"Today Revenue"} color="#009900" />
          </Row>
        
          <Row style={{justifyContent: 'center', padding: "10px"}}>
            <Col xs={7} className="m-0" style={{padding: "0px 10px 0px 0px"}}>
              <div className="m-0 p-0 white" style={{height: '100%', display: 'flex'}}>
              <MyChart data={data} />
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