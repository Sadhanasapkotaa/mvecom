import React from 'react'
import VendorSidebar from './VendorSidebar';

const VendorProfile = () => {
  return (
    <section className="container mt-4">
        <div className="row">
            <div className="col-md-3 col-12 mb-2">
                <VendorSidebar />
            </div>
                <div className="col-md-8 col-12">
                    <div className="card">
                        <div className="card-header">Profile</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstname"
                                        name="firstname"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastname"
                                        name="lastname"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
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
                                    <label htmlFor="email" className="form-label">
                                    Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="profileimage" className="form-label">
                                        Profile Image
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="profileimage"
                                        name="profileimage"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Set Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
</section >
);
}

export default VendorProfile
