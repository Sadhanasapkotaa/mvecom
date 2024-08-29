import React from "react";
import VendorSidebar from "./VendorSidebar";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const VendorCustomer = () => {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <VendorSidebar />
        </div>
        <div className="col-md-8 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      Sadhana Sapkota
                    </td>
                    <td>john@gmail.com</td>
                    <td>
                     +977 9818280183
                    </td>
                    <td> <button className="btn btn-primary ms-1 btn-sm">Orders</button>  </td>
                    <td> <button className="btn btn-danger btn-sm">Remove From List</button>  </td>
                  </tr>

               

                  <tr>
                    <td>2</td>
                    <td>
                      
                       John Doe
                    </td>
                    <td>john@gmail.com</td>
                    <td>
                     +977 9818280183
                    </td>
                    <td> <button className="btn btn-primary ms-1 btn-sm">Orders</button>  </td>
                    <td> <button className="btn btn-danger btn-sm">Remove From List</button>  </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>
                      
                       John Doe
                    </td>
                    <td>john@gmail.com</td>
                    <td>
                     +977 9818280183
                    </td>
                    <td> <button className="btn btn-primary ms-1 btn-sm">Orders</button>  </td>
                    <td> <button className="btn btn-danger btn-sm">Remove From List</button>  </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>
                      
                       John Doe
                    </td>
                    <td>john@gmail.com</td>
                    <td>
                     +977 9818280183
                    </td>
                    <td> <button className="btn btn-primary ms-1 btn-sm">Orders</button>  </td>
                    <td> <button className="btn btn-danger btn-sm">Remove From List</button>  </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>
                      
                       John Doe
                    </td>
                    <td>john@gmail.com</td>
                    <td>
                     +977 9818280183
                    </td>
                    <td> <button className="btn btn-primary ms-1 btn-sm">Orders</button>  </td>
                    <td> <button className="btn btn-danger btn-sm">Remove From List</button>  </td>
                  </tr>

                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorCustomer;
