import AcademicsOffered from './AcademicsOffered.jsx'
import Hero from './Hero.jsx'
import NewsSection from './News/NewsSection.jsx'
import AboutLC from './components/AboutLCSection.jsx'
import Nav from './components/Nav.jsx'
import Footer from './Footer.jsx'

function Index({ news }) {
	return (<>
    <Nav/>
    <div className="flex flex-col gap-5">
        <Hero title="Lourdes College"/>
        <NewsSection news={news}/>
        <AcademicsOffered/>
        <AboutLC/>
    </div>
    <Footer/>
	</>)
}
export default Index;
