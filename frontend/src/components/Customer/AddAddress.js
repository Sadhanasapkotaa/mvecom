import React from "react";
import Sidebar from "./Sidebar";


const AddAddress = () => {
        return (
            <section className="container mt-4">
                <div className="row">
                    <div className="col-md-3 col-12 mb-2">
                        <Sidebar />
                    </div>
                        <div className="col-md-8 col-12">
                            <div className="card">
                                <div className="card-header">Add Address</div>
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">
                                                New Address
                                            </label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                required
                                            />
                                        </div>
                                        
                                        <button type="submit" className="btn btn-primary">
                                            Add Address
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
        </section >
      );
};

export default AddAddress;
