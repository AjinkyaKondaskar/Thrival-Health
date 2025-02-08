import React, { useState } from "react";
import "./dashboard.css"; // Import the CSS file

function Dashboard() {
    const [inputValue, setInputValue] = useState("");

  return (
    <>
       
        <div className="dashboard-header">
            <OrderText orderNumber="#678584" details="Sara Durham on January 17, 2025" />
            <input type="text" placeholder="Search by patient or order" className="dashboard-search" />
            <div className="dashboard-buttons">
                <PrimaryButton text="Mark as Exception" color="Red"/>
                <PrimaryButton text="Fill Order" />
            </div>
        </div>
        <div>
            <DashboardContainer>
                    <DashboardContainerTitle title="Shipping Information" />
                    <p>Carrier: UPS 2nd Day Air</p>
                    <PrimaryButton text="Print Label" />
                    <PrimaryButton text="Download Invoice" />
            </DashboardContainer>
            <DashboardContainer>
                    <DashboardContainerTitle title="Shipping Information" />
                    <p>Carrier: UPS 2nd Day Air</p>
                    <PrimaryButton text="Print Label" />
                    <PrimaryButton text="Download Invoice" />
            </DashboardContainer>
            <DashboardContainer>
                    <DashboardContainerTitle title="Shipping Information" />
                    <p>Carrier: UPS 2nd Day Air</p>
                    <PrimaryButton text="Print Label" />
                    <PrimaryButton text="Download Invoice" />
            </DashboardContainer>
            <DashboardContainer>
                    <DashboardContainerTitle title="Shipping Information" />
                    <p>Carrier: UPS 2nd Day Air</p>
                    <PrimaryButton text="Print Label" />
                    <PrimaryButton text="Download Invoice" />
                    <input type="text" placeholder="Add text" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="dashboard-textfield" />
            </DashboardContainer>
       </div>
    </>
  )

}

const OrderText = ({ orderNumber, details }) => {
    return (
      <div className="order-text-container">
        <h1 className="dashboard-ordertext order-number">{orderNumber}</h1>
        <p className="dashboard-ordertext order-details">{details}</p>
      </div>
    );
  };




const DashboardContainer = ({ children }) => {
    return <div className="dashboard-container">{children}</div>;
  };

const DashboardContainerTitle = ({title}) => {
    return <h2 className="dashboard-container-title">{title}</h2>
};


const PrimaryButton = ({ text, color= "Blue" }) => {
return (
    <button className="dashboard-button" style={{backgroundColor: color}}>
        {text}
    </button>
);
};




export default Dashboard;