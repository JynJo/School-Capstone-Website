import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide's default styles

const ProgramsOffered = () => {
    const programs = [
        {
            id: 1,
            name: "Senior High School",
            image: "/images/programs-offered/shs.jpg",
            description:
                "Lourdes College's Senior High School program nurtures faith, fosters excellence, and cultivates a heart for humble service, equipping students for higher education and future success.",
        },
        {
            id: 2,
            name: "Higher Education",
            image: "/images/programs-offered/higher-education.jpg",
            description:
                "Lourdes College's Higher Education program nurtures faith, cultivates excellence, and instills a commitment to humble service, preparing graduates for meaningful careers and lifelong learning.",
        },
        {
            id: 3,
            name: "K to 10",
            image: "/images/programs-offered/k-to-10.jpg",
            description:
                "Lourdes College's K to 10 program nurtures faith, builds a passion for excellence, and develops attitudes for humble service, guiding students toward holistic growth and lifelong learning.",
        },
    ];

    return (
        <section
            id="programs-offered"
            className="container py-5"
            style={{ backgroundColor: "#FFE4EC" }}
        >
            <h2
                className="text-start h3 my-5 font-semibold"
                style={{  color: "#E41B70" }}
                data-aos="fade-up"
            >
                PROGRAMS OFFERED
            </h2>
            {/* <p
                className="text-start mb-5"
                style={{
                    fontSize: ".9em",
                    color: "#555",
                }}
            >
                Explore our diverse academic programs designed to equip students
                with the skills and knowledge for a successful future.
            </p> */}
            <Splide
                options={{
                    type: "loop",
                    perPage: 3,
                    perMove: 1,
                    gap: "1rem",
                    pagination: true,
                    arrows: false,
                    breakpoints: {
                        1024: { perPage: 2 },
                        768: { perPage: 1 },
                    },
                }}
                aria-label="Programs Offered"
            >
                {programs.map((program, index) => (
                    <SplideSlide key={program.id}>
                        <div
                            style={{
                                width: "100%",
                                maxWidth: "300px",
                                margin: "0 auto",
                                backgroundColor: "transparent",
                                overflow: "hidden",
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <img
                                src={program.image}
                                alt={program.name}
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    objectFit: "cover",
                                }}
                            />
                            <div
                                style={{
                                    textAlign: "start",
                                    padding: "20px",
                                }}
                            >
                                <h3
                                    style={{
                                        color: "#E41B70",
                                        fontWeight: "bold",
                                        fontSize: "1.2em",
                                    }}
                                >
                                    {program.name}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.9em",
                                        color: "#555",
                                    }}
                                >
                                    {program.description}
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    );
};

export default ProgramsOffered;