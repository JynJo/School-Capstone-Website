import React from "react";
import { Link } from "@inertiajs/react";

const LatestNews = ({ news }) => {
    return ( <div 
    data-aos="fade-down"
    className="container py-5 my-5"
>
    <div className="text-center mb-5">
        <h2
                className=" text-center h3 my-4 font-semibold"
                style={{ fontFamily: "Poppins" }}
                data-aos="fade-up"
            >
                Latest News
            </h2>
    </div>
    
    <div className="row g-4">
        {news && news.map((news, index) => (
            <div className="col-md-6 col-lg-4 ">
                <div className="mb-4 group card h-100 border-0 shadow-sm hover-shadow transition p-4">
                    <div className="ratio ratio-16x9 mb-4">
                        <img
                            className="card-img-top object-fit-cover rounded"
                            src={`/storage/${news.image}`}
                            alt="Blog Image"
                            style={{ maxHeight: "200px" }}
                        />
                    </div>
                    <div className="card-body p-0">
                        <h3 className="card-title h5">
                            {news.title}
                        </h3>
                        <Link
                            href={route("news.show", { title: news.title })}
                            className="d-inline-flex align-items-center text-decoration-none mt-3 text-[#ea9999] fw-semibold"
                        >
                            Read More
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
            </div>
        ))}
    </div>
</div>
    );
};

export default LatestNews;
