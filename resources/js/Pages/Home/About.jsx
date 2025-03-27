import { useState } from 'react';
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap';
import Layout from './Layouts/Layout.jsx';

const About = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <Container className="py-5">
      <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="history">History</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="mission">Mission & Vision</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="values">Core Values</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className='p-4'>
            <Tab.Content>
              <Tab.Pane eventKey="history">
                <h4 className="text-center text-primary mb-4">History</h4>
                <p>
                  In 1928, Archbishop James T.G. Hayes, S.J., founded the San Agustin Parochial School...
                  {/* Rest of history content */}
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="mission">
                <h4 className="text-center text-primary mb-4">Vision</h4>
                <p>
                  Witnessing the loving compassion of Jesus and the Ignacian Marian values...
                </p>
                <h4 className="text-center text-primary mt-5 mb-4">Mission</h4>
                <ol>
                  <li>Promote a culture of discernment leading to moral integrity...</li>
                  <li>Pursue constantly innovative programs...</li>
                  <li>Form Ignacian Marian leaders...</li>
                  <li>Build up more linkages...</li>
                  <li>Intensify our proactive response...</li>
                </ol>
              </Tab.Pane>
              <Tab.Pane eventKey="values">
                <h2 className="text-center text-primary mb-4" style={{ fontFamily: 'Faculty Glyphic'}}>FAITH EXCELLENCE SERVICE</h2>
                <h4 className="text-center text-primary mb-4">Core Values</h4>
                <p>
                  Founded in 1928 by the late Archbishop James Hayes, S. J. as San Agustin Parochial School...
                </p>
                <h4 className="text-center text-primary mt-5 mb-4">Educating and Forming the Lourdesian Way</h4>
                <p>
                  Our holistic approach starts in the earliest preschool education...
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

About.layout = (page) => <Layout children={page} />;
export default About;