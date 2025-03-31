import React from "react";
import Layout from "../Layouts/Layout.jsx";
import { Link } from '@inertiajs/react';

const Events = ({ events }) => {
    return (<div data-aos="fade-up">
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
                    EVENTS
                </h1>
            </div>
            </div>
        // <div className="container py-4">
        //     <div className="row mb-4">
        //         <div className="col-12">
        //             <h1 className="text-primary fw-bold">Events</h1>
        //             <p className="text-muted">
        //                 Showing {events.from} to {events.to} of {events.total} events
        //             </p>
        //         </div>
        //     </div>

        //     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
        //         {events.data.map((event) => (
        //             <div className="col" key={event.id}>
        //                 <div className="card h-100 shadow-sm">
        //                     <div className="position-relative">
        //                         <div className="position-absolute top-0 start-0 bg-primary text-white p-2">
        //                             <div className="fw-bold fs-5">
        //                                 {new Date(event.date).getDate()}
        //                             </div>
        //                             <div className="small">
        //                                 {new Date(event.date).toLocaleString("en-US", { month: "short" })}
        //                             </div>
        //                         </div>
        //                         <img
        //                             src={`/storage/${event.image}`}
        //                             alt={event.title}
        //                             className="card-img-top object-fit-cover"
        //                             style={{ height: "180px" }}
        //                         />
        //                     </div>
        //                     <div className="card-body">
        //                         <h5 className="card-title fw-bold">{event.title}</h5>
        //                         <p className="card-text text-muted">
        //                             {event.description.length > 100 
        //                                 ? `${event.description.substring(0, 100)}...` 
        //                                 : event.description}
        //                         </p>
        //                     </div>
        //                     <div className="card-footer bg-white border-0">
        //                         <small className="text-muted">
        //                             {new Date(event.date).toLocaleDateString('en-US', { 
        //                                 weekday: 'long', 
        //                                 year: 'numeric', 
        //                                 month: 'long', 
        //                                 day: 'numeric' 
        //                             })}
        //                         </small>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>

        //     <div className="d-flex justify-content-center">
        //         <nav>
        //             <ul className="pagination">
        //                 {events.links.map((link, index) => (
        //                     <li 
        //                         key={index} 
        //                         className={`page-item ${link.active ? 'active' : ''} ${link.url === null ? 'disabled' : ''}`}
        //                     >
        //                         <Link 
        //                             href={link.url || '#'} 
        //                             className="page-link" 
        //                             preserveScroll
        //                         >
        //                             {link.label.replace('&laquo;', '«').replace('&raquo;', '»')}
        //                         </Link>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </nav>
        //     </div>
        // </div>
    );
};

Events.layout = (page) => <Layout children={page} />;
export default Events;