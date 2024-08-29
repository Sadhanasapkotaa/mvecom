import React from "react";
import VendorSidebar from "./VendorSidebar";

const VendorPassword = () => {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <VendorSidebar />
                </div>
                <div className="col-md-8 col-12">
                        <div className="card">
                            <div className="card-header">Change Password</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="newpassword"
                                            name="newpassword"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Change Password
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </section >
  );
};

export default VendorPassword;