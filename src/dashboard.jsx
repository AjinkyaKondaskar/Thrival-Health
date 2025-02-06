import React from "react";
import "./dashboard.css"; // Import the CSS file

function Dashboard() {

  return (
    <>

       <DashboardContainer>
            <DashboardContainerTitle title="Shipping Information" />
            <p>Carrier: UPS 2nd Day Air</p>
            <DashboardContainerButton text="Print Label" />
            <DashboardContainerButton text="Download Invoice" />
       </DashboardContainer>
    </>
  )

}

const DashboardContainer = ({ children }) => {
    return <div className="dashboard-container">{children}</div>;
  };

const DashboardContainerTitle = ({title}) => {
    return <h2 className="dashboard-container-title">{title}</h2>
};

const DashboardContainerButton = ({ text }) => {
return (
    <button className="dashboard-button">
    {text}
    </button>
);
};




export default Dashboard;