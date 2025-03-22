import React from "react";
import DashboardLayout from "./DashboardLayout";
import MainContent from './Components/MainContent.jsx'

function Dashboard({ auth }) {
    return (<>
        <MainContent />

    </>);
}

Dashboard.layout = (page) => <DashboardLayout children={page} />;
export default Dashboard;
