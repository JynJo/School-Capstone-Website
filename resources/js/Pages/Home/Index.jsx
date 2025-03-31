import { useEffect } from "react";
import ProgramsOffered from "./ProgramsOffered.jsx";
import Hero from "./Components/Hero.jsx";
import NewsSection from "./Components/News/NewsSection.jsx";
import AboutSection from "./Components/AboutSection.jsx";
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./Layouts/Layout.jsx";

function Index({ news }) {
    useEffect(() => {
        AOS.init({
            delay: 200,
            duration: 700,
        });
    }, []);

    return (
        <Layout>
            {/* Hero */}
            <div className="flex flex-col gap-5">
                <Hero />
                {/* News */}
                <NewsSection news={news} />
                {/* Programs Offered */}
                <section style={{ backgroundColor: "#FFE4EC" }}>
                    <ProgramsOffered />
                </section>
                {/* About */}
                <AboutSection />
            </div>
        </Layout>
    );
}
export default Index;
