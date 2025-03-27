import { useState } from 'react';
import { Container, Nav, TabContent, TabPane } from 'react-bootstrap';
import Layout from './Layouts/Layout.jsx'
const About = () => {
  const [activeTab, setActiveTab] = useState('history');

  const tabContent = {
    history: (
      <>
        <h4 className="text-center text-primary mb-4">History</h4>
        <p>
          In 1928, Archbishop James T.G. Hayes, S.J., founded the San Agustin Parochial School...
          {/* Rest of history content */}
        </p>
        
      </>
    ),
    mission: (
      <>
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
      </>
    ),
    values: (
      <>
        <h2 className="text-center text-primary mb-4">FAITH EXCELLENCE SERVICE</h2>
        
        <h4 className="text-center text-primary mb-4">Core Values</h4>
        <p>
          Founded in 1928 by the late Archbishop James Hayes, S. J. as San Agustin Parochial School...
        </p>
        
        <h4 className="text-center text-primary mt-5 mb-4">Educating and Forming the Lourdesian Way</h4>
        <p>
          Our holistic approach starts in the earliest preschool education...
        </p>
      </>
    )
  };

  return (
    <Container className="py-5">
      <div className="d-flex flex-column flex-md-row">
        <Nav variant="pills" className="flex-column pe-md-3 mb-4 mb-md-0" style={{ minWidth: '200px' }}>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'history'} 
              onClick={() => setActiveTab('history')}
              className="text-start"
            >
              History
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'mission'} 
              onClick={() => setActiveTab('mission')}
              className="text-start"
            >
              Mission & Vision
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'values'} 
              onClick={() => setActiveTab('values')}
              className="text-start"
            >
              Core Values
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent activeKey={activeTab} className="ps-md-3 flex-grow-1">
          <TabPane eventKey="history" className="show">
            {tabContent.history}
          </TabPane>
          <TabPane eventKey="mission">
            {tabContent.mission}
          </TabPane>
          <TabPane eventKey="values">
            {tabContent.values}
          </TabPane>
        </TabContent>
      </div>
    </Container>
  );
};

About.layout = (page) => <Layout children={page} />;
export default About;
