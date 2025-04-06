import { useState } from "react";
import { Container, Nav, Card, Row, Col } from "react-bootstrap";
import Layout from "./Layouts/Layout.jsx";
import { usePage, Head } from "@inertiajs/react";
import NewsCard from "./Components/News/NewsCard.jsx";
const NewsPage = ({ news }) => {
    const { url } = usePage();
    return (<>
    <Head title='News'/>
        <div data-aos="fade-up">
            <div
                style={{
                    backgroundColor: "rgba(228, 27, 112, 0.9)",
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
                    Keep up with the latest news!
                </h1>
            </div>

            <Container className="py-5">
                {/* <div
                    className="mb-5"
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}
                >
                    <h4 className={`news-nav ${url == '/news' ? 'active' : ''}`}>All</h4>
                    <form>
                        <h4 className='news-nav'>News</h4>
                    </form>
                    <h4 className='news-nav'>Events</h4>
                </div> */}
                {news && news.map((item) => <NewsCard item={item} />)}
            </Container>
        </div>
        </>
    );
};

NewsPage.layout = (page) => <Layout children={page} />;
export default NewsPage;
