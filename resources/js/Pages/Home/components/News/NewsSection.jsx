import React from "react";
import { Link } from "@inertiajs/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide's default styles

const LatestNews = ({ news }) => {
    return (
        <div
            data-aos="fade-down"
            className="container py-5 my-5 "
           
        >
            <div className="mb-5">
                <h2
                    className="text-start h3 my-4 font-semibold"
                    style={{ color: "#E41B70" }}
                    data-aos="fade-up"
                >
                    LATEST NEWS
                </h2>
            </div>

            <Splide
                options={{
                    perPage: 4,
                    gap: "22rem",
                    // autoWidth: true
                    width: "100%",
                    pagination: true,
                    arrows: false,
                    breakpoints: {
                        1024: { perPage: 3 },
                        768: { perPage: 1 },
                    },
                }}
                aria-label="Latest News"
            >
                {news &&
                    news.map((newsItem, index) => (
                        <SplideSlide key={index}>
                            <div
                                className="card rounded-0 border-0 shadow-sm mb-4"
                                style={{ width: "22rem", backgroundColor: '#FFE4EC' }}
                            >
                                <img
                                    className="object-fit-cover"
                                    src={`/storage/${newsItem.image}`}
                                    alt={newsItem.title}
                                    style={{
                                        height: "300px",
                                        objectFit: "cover",
                                    }}
                                />
                                <div className="card-body p-3">
                                    <h3
                                        className="card-title mb-2"
                                        style={{
                                            color: "#E41B70",
                                            fontWeight: "bold",
                                            fontSize: "1.2em",
                                        }}
                                    >
                                        {newsItem.title}
                                    </h3>
                                    <p
                                        className="card-text"
                                        style={{ fontSize: "0.9em" }}
                                    >
                                        {newsItem.content.length > 200
                                            ? `${newsItem.content.substring(
                                                  0,
                                                  200
                                              )}...`
                                            : newsItem.content}
                                    </p>
                                    <Link
                                        href={route("news.show", {
                                            title: newsItem .title,
                                        })}
                                        className="btn pointer read_more_btn d-flex align-items-center justify-content-center mt-2  "
                                        style={{ fontSize: "0.85em", backgroundColor: "#FF69A8", color: "#fff" }}
                                    >
                                        READ MORE
                                        <svg
                                            className="ms-1 transition-all ease-in-out group-hover:translate-x-1"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
            </Splide>
        </div>
    );
};

export default LatestNews;
