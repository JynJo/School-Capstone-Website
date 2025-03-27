import { Carousel } from "react-bootstrap";

export default function Hero({ title }) {
    return (
       <div 
    className="d-flex align-items-center justify-content-center flex-column"
    style={{
        height: "70vh",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('/images/about-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}
>
    <h2 
        className="text-white text-center fw-bold mb-3 display-3"
        style={{ fontFamily: "Libre Baskerville" }}
    >
        {title}
    </h2>
    <span 
        className="text-white text-center fs-5"
        style={{ fontFamily: "Open Sans" }}
    >
        Nurturing Faith, Excellence, and Service
    </span>
</div>
    );
}
