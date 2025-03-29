import Header from './Components/Header.jsx'

const DashboardLayout = ({ children }) => {
    return (<>
        <Header/>
        <div className="p-5">
            { children }
        </div>
    </>)
}

export default DashboardLayout;
