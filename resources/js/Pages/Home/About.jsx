import { useState } from "react";
import { Container, Nav, Card, Row, Col } from "react-bootstrap";
import Layout from "./Layouts/Layout.jsx";
import { Link } from "@inertiajs/react";

const About = ({ news }) => {
    const [activeTab, setActiveTab] = useState("history");

    return (
        <div data-aos="fade-up">
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(228, 27, 112, 0.7), rgba(228, 27, 112, 0.9)), url('/images/lc-seal.png')`,
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
                    NEWS
                </h1>
            </div>

            <Container className="py-5">
                {news &&
                    news.map((item) => (
                        <Card
                            data-aos="fade-up"
                            style={{
                                width: "100%",
                                maxWidth: "600px",
                                margin: "20px auto",
                                border: "none", // Remove default card border
                                fontFamily: "Arial, sans-serif", // Match typical news font
                            }}
                        >
                            <Card.Body style={{ padding: "1.5rem" }}>
                                <img
                                    src={`/storage/${item.image}`}
                                    alt={item.title}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "0.5rem",
                                        marginBottom: "1rem",
                                    }}
                                />
                                {/* Main Title (h1) */}
                                <Link
                                    href={route("news.show", {
                                        title: item.title,
                                    })}
                                >
                                    <h1
                                        style={{
                                            fontSize: "1.5rem",
                                            fontWeight: "bold",
                                            marginBottom: "0.5rem",
                                            lineHeight: "1.3",
                                        }}
                                        className="text-primary"
                                    >
                                        {item.title}
                                    </h1>

                                {/* Date & Time */}
                                <p
                                    style={{
                                        fontSize: "0.875rem",
                                        color: "#666",
                                        marginBottom: "1rem",
                                        fontStyle: "italic",
                                    }}
                                >
                                    March 5, 2025 • 9:03 AM
                                </p>
                                </Link>


                                {/* News Content (truncated as in the image) */}
                                <p
                                    style={{
                                        fontSize: "1rem",
                                        color: "#FF69A8",
                                        lineHeight: "1.5",
                                        marginBottom: "0",
                                    }}
                                >
                                    {item.content.length > 200
                                        ? `${item.content.substring(0, 200)}...`
                                        : item.content}
                                </p>
                            </Card.Body>
                        </Card>
                    ))}
            </Container>
        </div>
    );
};

About.layout = (page) => <Layout children={page} />;
export default About;
