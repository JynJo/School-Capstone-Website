import { Carousel } from "react-bootstrap";

export default function Hero() {
    return (
        <div
            className="d-flex align-items-center justify-content-center flex-column"
            style={{
                height: "70vh",
                backgroundImage:
                    " linear-gradient(rgba(228, 27, 112, 0.7), rgba(228, 27, 112, 0.9)), url('/images/about-img.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h2 className="text-white text-center fw-bold hero-title">
                Lourdes College, Inc
            </h2>
            <span
                className="text-white text-center fs-8"
            >
                Nurturing Faith, Building Passion for Excellence, Developing
                Attitudes for Humble Service.
            </span>
        </div>
    );
}
