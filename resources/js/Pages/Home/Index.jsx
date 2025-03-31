import { useEffect } from "react";
import AcademicsOffered from "./AcademicsOffered.jsx";
import Hero from "./Hero.jsx";
import NewsSection from "./News/NewsSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

function Index({ news }) {
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 700,
        });
    }, []);

    return (
        <>
            <Nav />
            <div className="flex flex-col gap-5">
                <Hero />
                <NewsSection news={news} />
                <section style={{ backgroundColor: "#FFE4EC" }}>
                    <AcademicsOffered />
                </section>
                <AboutSection />
            </div>

            <h1
                className="text-center h3 my-4 font-semibold"
                style={{ fontFamily: "Poppins", color: "#E41B70" }}
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
                >
                </iframe>
            </div>
            <Footer />
        </>
    );
}
export default Index;
