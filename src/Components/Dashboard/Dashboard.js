import React from 'react'
import ChartCard from '../Common/ChartCard/ChartCard'
import Header from '../Common/Header/Header'
import LineCharts from '../Common/LineChart/LineCharts'
import Sidenav from '../Common/Sidenav/Sidenav'
import Welcome from '../Common/Welcome/Welcome'
import "./dashboard.css"

export default function Dashboard() {
  const arr = [1, 2, 3];
  return (
    <div>
        <div className="dashboard-container">
            <Sidenav />
        <div className="dashboard-content-container">
            <Header />
            <div className="welcome-info">
              <Welcome />
              <ChartCard />
            </div>
            <div  className="line-chart">
              {arr.map((elem)=>(
                <LineCharts elem={elem} />
              ))}
            </div>
        </div>
        </div>
    </div>
  )
}
