import './App.css';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Sidebar></Sidebar>
        </Col>
        <Col sm={8}>
          <Map></Map>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
