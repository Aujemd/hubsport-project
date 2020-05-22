import React from 'react'
import {SidebarLeft} from '../components/sidebarLeft'
import {DashboardContent} from '../components/dashboardContent'
import {SidebarRight} from '../components/sidebardRight'

export const Dashboard = () => {
    return <div className="row vh-100 vw-100 m-0 overflow-hidden">
        <SidebarLeft/>
        <DashboardContent/>
        <SidebarRight/>
    </div>
}