import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AcademicsOffered = () => {
    const programs = [
        { 
            id: 1, 
            name: "Technical-Vocational-Livelihood (TVL)", 
            image: "/images/tvl.jpg",
            description: "The TVL track provides technical and vocational skills training in various specializations like ICT, Home Economics, Industrial Arts, and Agri-Fishery Arts, preparing students for immediate employment after graduation."
        },
        { 
            id: 2, 
            name: "Humanities and Social Sciences (HUMMS)", 
            image: "/images/humms.jpg",
            description: "The HUMSS strand focuses on developing students' understanding of human behavior, society, and culture through subjects like literature, philosophy, political science, and social sciences, ideal for future lawyers, educators, and social workers."
        },
        { 
            id: 3, 
            name: "Accountancy, Business and Management (ABM)", 
            image: "/images/abm.jpg",
            description: "ABM strand prepares students for careers in business and finance with comprehensive courses in accounting, business management, economics, and entrepreneurship, building the next generation of business leaders."
        },
        { 
            id: 4, 
            name: "Science, Technology, Engineering and Mathematics (STEM)", 
            image: "/images/stem.jpg",
            description: "STEM strand focuses on advanced science and math concepts, with rigorous coursework in calculus, physics, chemistry, and biology, preparing students for careers in engineering, medicine, technology, and research."
        }
    ];

    return (
        <section id="programs-offered" className="p-4">
            <h2
                className=" text-center h3 my-4 font-semibold"
                style={{ fontFamily: "Poppins" }}
                data-aos="fade-down"
            >
                Programs Offered
            </h2>

            <Container>
                <Row className="g-4">
                    {programs.map((program, index) => (
                        <Col key={program.id} xs={12} md={6} lg={3} className='mb-4'>
                            <Card 
                                className="h-100 shadow border-0"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                style={{ minHeight: "450px" }}
                            >
                                <div className="p-3" style={{ height: "250px", overflow: "hidden" }}>
                                    <Card.Img 
                                        variant="top" 
                                        src={program.image} 
                                        alt={program.name}
                                        className="w-100 h-100 object-fit-cover rounded"
                                    />
                                </div>
                                <Card.Body className="d-flex flex-column p-4">
                                    <Card.Title 
                                        className="text-center mb-3 fs-4" 
                                        style={{ color: "#ea9999", fontFamily: "Poppins" }}
                                    >
                                        {program.name}
                                    </Card.Title>
                                    <Card.Text className="flex-grow-1 fs-5">
                                        {program.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default AcademicsOffered;