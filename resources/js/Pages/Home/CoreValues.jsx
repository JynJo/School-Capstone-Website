import { 
	Container,
	Row,
	Col,
	Image
} from 'react-bootstrap'

export default function CoreValues() {
	return (<>
		<Container>
			<h2 className="h3 mb-6 font-weight-bold text-center welcome-text">Educating and Forming the Lourdesian Way</h2>
        <Row className="">
          <Col xs={6} md={4}>
            <Image src="images/img1.jpg" className="welcome-image "/>
          </Col>
          <Col xs={6} md={4}>
            <Image src="images/img2.jpg" className="welcome-image " />
          </Col>
          <Col xs={6} md={4}>
            <Image src="images/img3.jpg" className="welcome-image"/>
          </Col>
        </Row>
        <Container style={{ letterSpacing: '.5px', marginTop: '2rem' }}>
          <p>Our holistic approach starts in the earliest preschool education where faith and academic endeavors are given equal weights in the development and formation of the person. In the classroom, ethical and moral considerations always complement intellectual discourse. We firmly believe in the essence of inculcating a strong spiritual foundation in every learner while sharpening his/her life’s skills. We prepare you for life and expose you to unique challenges that enrich your mind, heart and spirit. We invite you to discover how we challenge you to learn and grow with us; join the hundreds of our proud graduates equipped to make their own distinction as Lourdesians.</p>
        </Container>

{/*      <Row className="mt-3 p-2">
        <Col>
          <article className="text-center">
            <header>
              <h4 className="h4">Vision</h4>
            </header>
            <p>Witnessing the loving compassion of Jesus and the Ignacian Marian values, we, a nurturing and learning community, actively involved in inner and social transformation.</p>
          </article>
        </Col>

         <Col>
          <article className="text-center">
            <header>
              <h4 className="h4">Mission</h4>
            </header>
            <ol>
              <li>Promote a culture of discernment leading to moral integrity with emphasis    on peace, justice, care for life and environment;</li>
              <li>Pursue constantly innovative programs, approaches, and educational strategies to develop world-class professionals;</li>
              <li>Form Ignacian Marian leaders who witness to faith, excellence and service in varied socio-cultural settings;</li>
              <li>Build up more linkages  to develop human and material resources equitably;</li>
              <li>Intensify our proactive response to issues related to the social concerns of the Church.</li>
            </ol>
          </article>
        </Col>

      </Row>*/}
    </Container>

    <Container className="py-4 mt-4 bg-light shadow-sm">
      <Row className="mt-3 p-2">
        <Col>
          <article className="text-center">
            <header>
        <h2 className="h3 mb-3 font-weight-bold text-center welcome-text">Core Values</h2>
            </header>

            <p>Founded in 1928 by the late Archbishop James Hayes, S. J. as San Agustin Parochial School, an elementary school for boys and girls. Five years later, in 1933, the school gave to the community its first twenty (20) graduates and responded to a growing felt need of High School Catholic Education in the city, the school operated with separate principals for the boys and for the girls. The girls division saw the birth of LOURDES ACADEMY which was managed by the Religious of the Virgin Mary (RVM) Sisters.</p>
          </article>
        </Col>

      </Row>
    </Container>

	</>)
}