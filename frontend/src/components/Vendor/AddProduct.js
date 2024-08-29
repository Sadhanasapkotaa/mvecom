import React from 'react'
import VendorSidebar from './VendorSidebar'
// import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <section className="container mt-4">
    <div className="row">
        <div className="col-md-3 col-12 mb-2">
            <VendorSidebar />
        </div>
        <div className="col-md-8 col-12">
                        <div className="card">
                            <div className="card-header">Add Product</div>
                            <div className="card-body">
                                <form>

                                <div className="mb-3">
                                        <label htmlFor="producttitle" className="form-label">
                                           Category
                                        </label>
                                       <select name="producttitle" id="producttitle" className="form-control">
                                        <option value="Python">Python</option>
                                        <option value="JS">JS</option>
                                        <option value="PHP">PHP</option>
                                        <option value="JavaScript">JavaScript</option>
                                       </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="producttitle" className="form-label">
                                            Product Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="producttitle"
                                            name="producttitle"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">
                                            Price
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="price"
                                            name="price"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">
                                            Description
                                        </label>
                                        <br/>
                                        <textarea
                                        
                                            id="description"
                                            name="description"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="productimage" className="form-label">
                                            Profile Image
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="productimage"
                                            name="productimage"
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
  )
}

export default AddProduct
