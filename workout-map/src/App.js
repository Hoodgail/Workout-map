import './App.css';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
