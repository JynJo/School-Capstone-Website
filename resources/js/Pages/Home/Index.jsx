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
                <Hero title="Lourdes College" />
                <NewsSection news={news} />
                <AcademicsOffered />
                <AboutSection />
            </div>
            <Footer />
        </>
    );
}
export default Index;
