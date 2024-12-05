import Nav from '../components/Nav.jsx'
import Footer from '../Footer.jsx'
export default function Layout({ children }) {
    return (<>
        <Nav/>
            { children }
        <Footer/>

    </>)
}
