import React, { useState } from "react";
import Layout from "../Layouts/Layout.jsx";
import { Pagination } from "react-bootstrap";

const Events = ({ events }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 6;

    // Get current events
    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container py-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="text-primary fw-bold">Events</h1>
                    <p className="text-muted">{events.length} upcoming events</p>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
                {currentEvents.map((event) => (
                    <div className="col" key={event.id}>
                        <div className="card h-100 shadow-sm">
                            <div className="position-relative">
                                <div className="position-absolute top-0 start-0 bg-primary text-white p-2">
                                    <div className="fw-bold fs-5">
                                        {new Date(event.date).getDate()}
                                    </div>
                                    <div className="small">
                                        {new Date(event.date).toLocaleString("en-US", { month: "short" })}
                                    </div>
                                </div>
                                <img
                                    src={`/storage/${event.image}`}
                                    alt={event.title}
                                    className="card-img-top object-fit-cover"
                                    style={{ height: "180px" }}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">{event.title}</h5>
                                <p className="card-text text-muted">
                                    {event.description.length > 100 
                                        ? `${event.description.substring(0, 100)}...` 
                                        : event.description}
                                </p>
                            </div>
                            <div className="card-footer bg-white border-0">
                                <small className="text-muted">
                                    {new Date(event.date).toLocaleDateString('en-US', { 
                                        weekday: 'long', 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center">
                <Pagination>
                    {Array.from({ length: Math.ceil(events.length / eventsPerPage) }).map((_, index) => (
                        <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </div>
    );
};

Events.layout = (page) => <Layout children={page} />;
export default Events;