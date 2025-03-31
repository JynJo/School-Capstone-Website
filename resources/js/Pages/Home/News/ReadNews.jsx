import Layout from "../Layouts/Layout.jsx";

export default function ReadNews({ news }) {
    return (
        <div data-aos="fade-up">
            {/* Title */}
            <div
                style={{
                    backgroundImage: `linear-gradient(rgba(228, 27, 112, 0.7), rgba(228, 27, 112, 0.9)), url('/storage/${news.image}')`,
                    backgroundSize: "cover",
                    padding: "50px 0",
                    backgroundPosition: "center",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "28px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                        color: "white",
                        textTransform: "uppercase",
                    }}
                >
                    {news.title}
                </h1>
            </div>

            <div
                style={{
                    fontFamily: "Arial, sans-serif",
                    maxWidth: "800px",
                    margin: "0 auto",
                    backgroundColor: "#fff",
                }}
            >
                {/* <h2
                    style={{
                        textAlign: "center",
                        fontSize: "22px",
                        fontWeight: "bold",
                        marginBottom: "30px",
                        fontStyle: "italic",
                        color: "#444",
                    }}
                >
                    "Bagong Pilipinas: Pagpupuo Mapanilkhang Propesyona!"
                </h2> */}

                {/* Event Details */}

                {/* Content */}

                <img
                    src={`/storage/${news.image}`}
                    alt={news.title}
                    style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "20px",
                    }}
                />

                <hr
                    style={{
                        border: "none",
                        height: "1px",
                        backgroundColor: "#ddd",
                        margin: "30px 0",
                    }}
                />
                <div style={{padding: "20px"}}>
                <p
                    style={{
                        fontSize: "16px",
                        lineHeight: "1.6",
                        color: "#333",
                        textAlign: "justify",
                    }}
                >
                    {news.content}
                </p>
                </div>
              
            </div>
        </div>
    );
}

ReadNews.layout = (page) => <Layout children={page} />;
