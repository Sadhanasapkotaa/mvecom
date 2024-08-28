import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />
                </div>
                    <div className="col-md-8 col-12">
                        <div className="card">
                            <div className="card-header">Profile</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            User Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Password
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
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </section >
  );
};

export default Profile;
