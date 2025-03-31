import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
    return (
        <div className="container py-5" style={{ maxWidth: "800px" }}>
            <h1
                className="text-center h3 my-4 font-semibold"
                style={{ fontFamily: "Poppins", color: "#E41B70" }}
                data-aos="fade-up"
            >
                ABOUT US
            </h1>

            <Accordion defaultActiveKey="0" flush>
                {/* Vision */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <span style={{ fontWeight: "600", color: "#E41B70" }}>
                            Vision{" "}
                        </span>
                    </Accordion.Header>
                    <Accordion.Body>
                        {/* Add your vision content here */}
                    </Accordion.Body>
                </Accordion.Item>

                {/* Mission */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <span style={{ fontWeight: "600", color: "#E41B70" }}>
                            Mission{" "}
                        </span>
                    </Accordion.Header>
                    <Accordion.Body>
                        {/* Add your mission content here */}
                    </Accordion.Body>
                </Accordion.Item>

                {/* Educational Organization Policy */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <span style={{ fontWeight: "600", color: "#E41B70" }}>
                            Educational Organization Policy{" "}
                        </span>
                    </Accordion.Header>
                    <Accordion.Body>
                        {/* Add your policy content here */}
                    </Accordion.Body>
                </Accordion.Item>

                {/* Key Directions */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <span style={{ fontWeight: "600", color: "#E41B70" }}>
                            Key Directions{" "}
                        </span>
                    </Accordion.Header>
                    <Accordion.Body>
                        {/* Add your directions content here */}
                    </Accordion.Body>
                </Accordion.Item>

                {/* Privacy Policy */}
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <span style={{ fontWeight: "600", color: "#E41B70" }}>
                            Privacy Policy{" "}
                        </span>
                    </Accordion.Header>
                    <Accordion.Body>
                        {/* Add your privacy policy content here */}
                    </Accordion.Body>
                </Accordion.Item>

                {/* Core Values */}
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <span style={{ fontWeight: "600", color: "#E41B70" }}>
                            Core Values{" "}
                        </span>
                    </Accordion.Header>
                    <Accordion.Body>
                        {/* Add your core values content here */}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AboutUs;
