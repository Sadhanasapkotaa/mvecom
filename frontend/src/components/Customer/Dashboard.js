import React from "react";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-md-4 mb-2 d-flex justify-space-between">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Total Orders</h5>
                  <p className="card-text">
                    <a href="#">10</a>
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Total Orders</h5>
                  <p className="card-text">
                    <a href="#">10</a>
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Total Orders</h5>
                  <p className="card-text">
                    <a href="#">10</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
