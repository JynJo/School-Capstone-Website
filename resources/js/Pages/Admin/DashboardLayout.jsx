import Header from './Components/Header.jsx'
import Sidebar from './Components/Sidebar.jsx'
import { Link } from '@inertiajs/react'

const DashboardLayout = ({ children }) => {
    return (<>
        <Header/>
        <div class="p-6">
                { children }
        </div>
    </>)
}

export default DashboardLayout;
