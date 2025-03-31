import { useState } from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import Layout from "./Layouts/Layout.jsx";

const About = () => {
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
        </div>
    );
};

About.layout = (page) => <Layout children={page} />;
export default About;
