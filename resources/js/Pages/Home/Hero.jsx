import { Carousel } from "react-bootstrap";

export default function Hero({ title }) {
    return (
        <div
            className="h-[70vh] flex items-center justify-center bg-cover bg-center flex-col"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('/images/about-img.jpg')", // Dark shade overlay
            }}
        >
            <h2
                className="text-white text-4xl md:text-6xl font-bold text-center"
                style={{ fontFamily: "Libre Baskerville" }}
            >
                {title}
            </h2>
            <span
                className="text-white text-md text-center"
                style={{ fontFamily: "Open Sans" }}
            >
                Nurturing Faith, Excellence, and Service
            </span>
        </div>
    );
}
