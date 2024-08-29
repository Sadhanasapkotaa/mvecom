import React from "react";
import VendorSidebar from "./VendorSidebar";



const Dashboard = () => {
  return (
      <section className="container mt-4">
          <div className="row">
              <div className="col-md-3 col-12 mb-2">
                  <VendorSidebar />
              </div>
              <div className="col-md-8 col-12">
  <div className="row">
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border-light">
        <div className="card-body text-center">
          <h5 className="card-title mb-3">Total Customers</h5>
          <p className="card-text display-4 font-weight-bold text-primary">10</p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border-light">
        <div className="card-body text-center">
          <h5 className="card-title mb-3">Total Products</h5>
          <p className="card-text display-4 font-weight-bold text-primary">1,27</p>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border-light">
        <div className="card-body text-center">
          <h5 className="card-title mb-3">Total Order</h5>
          <p className="card-text display-4 font-weight-bold text-primary">$5,678</p>
        </div>
      </div>
    </div>
  </div>
</div>


              </div>
  </section >
);
};

export default Dashboard;
