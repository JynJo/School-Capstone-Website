import Nav from "../Components/Nav.jsx";
import Footer from "../Components/Footer.jsx";

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            {children}
            {/* MAP */}
            <h1
                className="text-center h3 my-4 font-semibold"
                style={{ color: "#E41B70" }}
                data-aos="fade-up"
            >
                CONTACT US
            </h1>

            <div>
                <iframe
                    width="100%"
                    height="400"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=8.477030150000001,124.64241773049325+(Lourdes%20College)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
            </div>
            <Footer />
        </>
    );
}
