import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Address = () => {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />
                </div>
                    <div className="col-md-8 col-12">
                        <div className="row">
                            <div className="col-12 mb-4">

                        <Link to="customer/address/add-address" className="btn btn-outline-success float-end"><i className="fa fa-plus-circle"></i> Add Address </Link>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted bg-secodary">
                                    <span className="badge bg-success"> 
                                        <i className="fa fa-check-circle"></i> Mark Default</span> <br />
                                        <p>St. -2, 123, New Krishna Nagar,Hear Jain Mandir Punjaab India </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                    <span className="badge bg-secondary">Mark Default</span> <br />
                                        <p>St. -2, 123, New Krishna Nagar,Hear Jain Mandir Punjaab India </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                    <span className="badge bg-secondary">Mark Default</span> <br />

                                        <p>St. -2, 123, New Krishna Nagar,Hear Jain Mandir Punjaab India </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                    <span className="badge bg-secondary">Mark Default</span> <br />

                                        <p>St. -2, 123, New Krishna Nagar,Hear Jain Mandir Punjaab India </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                    <span className="badge bg-secondary">Mark Default</span> <br />

                                        <p>St. -2, 123, New Krishna Nagar,Hear Jain Mandir Punjaab India </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 mb-4">
                                <div className="card">
                                    <div className="card-body text-muted">
                                    <span className="badge bg-secondary">Mark Default</span> <br />

                                        <p>St. -2, 123, New Krishna Nagar,Hear Jain Mandir Punjaab India </p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
    </section >
  );
};

export default Address;
