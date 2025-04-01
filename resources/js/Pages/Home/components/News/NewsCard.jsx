import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";

const NewsCard = ({ item }) => {
    return (
        <Card className="border-0 mb-5">
            <Row className="g-3">
                <Col md={7}>
                    <Image
                        src={`/storage/${item.image}`}
                        alt={item.title}
                        fluid
                        style={{ height: "300px", objectFit: "cover", width: "100%" }}
                    />
                </Col>
                <Col md={5}>
                    <h4 className="text-primary">{item.title}</h4>
                    <small className="fw-bold d-block mb-2">
                        {new Date(item.created_at).toLocaleString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        })}
                    </small>
                    <p style={{color: "#FF69A8"}}>
                        {item.content.length > 100
                            ? item.content.substring(0, 100) + "..."
                            : item.content}
                    </p>
                </Col>
            </Row>
        </Card>
    );
};

export default NewsCard;
