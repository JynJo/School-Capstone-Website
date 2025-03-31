import { Link } from "@inertiajs/react";
import Hero from "../Hero.jsx";
import { Head } from "@inertiajs/react";
import Layout from "../Layouts/Layout.jsx";
import { Container, Row, Col, Card } from "react-bootstrap";

const Index = ({ auth }) => {
    const images = [
        "/images/enrollment1.jpg",
        "/images/enrollment2.jpg",
        "/images/enrollment3.jpg",
        "/images/enrollment4.jpg",
        "/images/enrollment5.jpg",
    ];

    return (
        <div data-aos="fade-up">
            <Head title="Admissions" />
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(228, 27, 112, 0.7), rgba(228, 27, 112, 0.9)), url('/images/cbg-2.jpg')`,
                    backgroundSize: "cover",
                    padding: "50px",
                    backgroundPosition: "center",
                }}
            >
                <h1
                    style={{
                        textAlign: "start",
                        fontSize: "28px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                        color: "white",
                        textTransform: "uppercase",
                    }}
                >
                    ADMISSION PROCESS
                </h1>
            </div>
            <Container className="py-5" data-aos="fade-up">
                <h4
                    className="font-weight-bold text-primary mb-4"
                    style={{  fontWeight: "bold" }}
                >
                    We are delighted that you are considering Lourdes College
                    for your child's educational journey. As a Catholic
                    institution rooted in faith, excellence, and service,
                    Lourdes College is more than just a school — it is a vibrant
                    community of learners. From our youngest students in
                    Kindergarten to our High School graduates, we focus not only
                    on academic achievement but also on nurturing strong
                    character, spiritual growth, and a lifelong love of
                    learning.
                </h4>
                <p className="lead" >
                    We take pride in our students' accomplishments, including
                    those who go on to excel in prestigious universities and
                    meaningful careers. However, we believe that true success
                    starts with a solid foundation — one built on faith, values,
                    and the pursuit of knowledge. At Lourdes College, every
                    child is valued, supported, and encouraged to grow as a
                    whole person, ready to face the world with compassion,
                    confidence, and a strong moral compass. Thank you for
                    considering joining the Lourdes College family. We are
                    excited to partner with you in shaping the future of your
                    child.
                </p>
            </Container>

            <Container className="py-4">
                <div className="position-relative text-center my-5">
                    <hr
                        className="position-absolute w-100"
                        style={{ top: "50%" }}
                    />
                    <span className="position-relative bg-white px-3 h5 font-weight-bold">
                        Admission Process
                    </span>
                </div>

                <Row className="g-4 justify-content-center">
                    {images.map((image, index) => (
                        <Col key={index} md={8} lg={6} data-aos="fade-up">
                            <Card className="shadow-sm">
                                <Card.Img
                                    variant="top"
                                    src={image}
                                    className="img-fluid"
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

Index.layout = (page) => <Layout children={page} />;
export default Index;
