import React from "react";
import VendorSidebar from "./VendorSidebar";

const VendorReport = () => {
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
                  <h5 className="card-title mb-3">Daily Report</h5>
                  <button className="btn btn-sm btn-primary">View</button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow border">
              <div className="card-body text-center">
                  <h5 className="card-title mb-3">Monthly Report</h5>
                  <button className="btn btn-sm btn-primary">View</button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow-sm border-light">
              <div className="card-body text-center">
                  <h5 className="card-title mb-3">Yearly Report</h5>
                  <button className="btn btn-sm btn-primary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorReport;
