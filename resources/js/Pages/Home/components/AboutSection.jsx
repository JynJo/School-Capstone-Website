import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
    return (
        <div className="container py-5" style={{ maxWidth: "800px" }}>
            <h1
                className="text-center h3 my-4 font-semibold"
                style={{ color: "#E41B70" }}
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
                        In our Education Ministry, we witness to the loving
                        compassion of Jesus, the Teacher. True to our Ignacian
                        Marian identity, we empower and nurture learning
                        communities towards ethical and corporate responsibility
                        for inner and social transformation for the common good.
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
                        We commit ourselves to:
                        <ol>
                            <li>
                                Grow deeper in discernment and interior freedom
                                to be prophets of hope in today’s world;
                            </li>
                            <li>
                                Continuously form Ignacian Marian leaders who
                                witness to faith, excellence and service in
                                varied socio-cultural settings;
                            </li>
                            <li>
                                Constantly pursue innovative programs,
                                approaches, and educational strategies to
                                develop world-class professionals;
                            </li>
                            <li>
                                Build up resources and capabilities to respond
                                to contemporary issues towards enhancement of
                                quality of life; and
                            </li>
                            <li>Expand our educational thrust for the poor.</li>
                        </ol>
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
                        <span>
                            We, at Lourdes College Inc. of Cagayan de Oro City,
                            provide inclusive and transformative Ignacian Marian
                            education to produce service-oriented individuals
                            and world-class professionals who serve for the
                            common good.
                            <br />
                            <br />
                            Guided by the principles of Educational Organization
                            Management System, we commit to faithfully comply
                            with all the applicable external and internal
                            requirements and sustain our educational management
                            system.
                            <br />
                            <br />
                            Together, we embrace the highest educational quality
                            standards through continuous innovation of
                            instructional and support processes, research,
                            community engagement & services, aligned with
                            sustainable development goals, stakeholders’ needs
                            and expectations, and ethical and responsible use of
                            technology.
                        </span>
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
                        <ol>
                            <li>Transformative Ignacian Marian Education towards service for the common good.</li>
                            <li>Strong and relevant Institutional programs to enhance quality of life.</li>
                            <li>Responsible partnership to sustain and advance human welfare.</li>
                            <li>Sustainable programs to favor the disadvantaged sectors of the society.</li>
                        </ol>
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
                        <span>
                        We from Lourdes College of Cagayan de Oro City make sure that all of the personal information you have provided are secured and confidential. With your consent, we collect the necessary personal information with the intent to fulfill its purpose.
                        </span>
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
                        <span style={{ fontWeight: "bold" }}>Faith:</span>
                        <ul>
                            <li>Strong Faith in God</li>
                            <li>Prophetic Witness to Gospel Values</li>
                            <li>Nationalism</li>
                            <li>Justice</li>
                            <li>Communion</li>
                        </ul>

                        <span style={{ fontWeight: "bold" }}>Excellence:</span>
                        <ul>
                            <li>Integrity</li>
                            <li>Competence</li>
                            <li>Resourcefulness</li>
                            <li>Discipline</li>
                            <li>Self-Reliance</li>
                        </ul>

                        <span style={{ fontWeight: "bold" }}>Service:</span>
                        <ul>
                            <li>Stewardship</li>
                            <li>Humility</li>
                            <li>Charity</li>
                            <li>Courage</li>
                            <li>Preferential Love for the Poor</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AboutUs;
