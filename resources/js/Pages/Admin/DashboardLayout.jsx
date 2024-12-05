import Header from './Components/Header.jsx'
import MainContent from './Components/MainContent.jsx'
import Sidebar from './Components/Sidebar.jsx'
import { Link } from '@inertiajs/react'

const DashboardLayout = ({ children }) => {
    return (<>
        <Header/>
        <Sidebar/>
        <div class="w-full lg:ps-64">
            <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                { children }
            </div>
        </div>
    </>)
}

export default DashboardLayout;
