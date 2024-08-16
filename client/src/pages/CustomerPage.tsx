import 'bootstrap/dist/css/bootstrap.min.css';
import {CustomerController} from "../controllers/CustomerController";

export function CustomerPage() {

    const {
        customerId,
        customerName,
        customerAddress,
        customerSalary,
        customers,
        setCustomerId,
        setCustomerName,
        setCustomerAddress,
        setCustomerSalary,
        saveCustomer,
        searchCustomer,
        updateCustomer,
        deleteCustomer,
        loadAllCustomers,
        handleRowClick
    } = CustomerController();

    return (
        <main className="container my-5">
            <h1 className="text-center mb-4 fw-bold">Customer Management</h1>
            {/* Customer Form */}
            <div className="row justify-content-center">
                <form className="col-12 col-md-8 col-lg-6 shadow-lg p-5">
                    <div className="mb-3">
                        <input className="form-control" value={customerId}
                               onChange={(e) => setCustomerId(e.target.value)} type="text" placeholder="Customer ID"/>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" value={customerName}
                               onChange={(e) => setCustomerName(e.target.value)} type="text"
                               placeholder="Customer Name"/>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" value={customerAddress}
                               onChange={(e) => setCustomerAddress(e.target.value)} type="text"
                               placeholder="Customer Address"/>
                    </div>
                    <div className="mb-3">
                        <input className="form-control" value={customerSalary}
                               onChange={(e) => setCustomerSalary(e.target.value)} type="text"
                               placeholder="Customer Salary"/>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-outline-primary mx-2" type="button" onClick={saveCustomer}>Save
                        </button>
                        <button className="btn btn-outline-success mx-2" type="button" onClick={searchCustomer}>Search
                        </button>
                        <button className="btn btn-outline-warning mx-2" type="button" onClick={updateCustomer}>Update
                        </button>
                        <button className="btn btn-outline-danger mx-2" type="button" onClick={deleteCustomer}>Delete
                        </button>
                        <button className="btn btn-outline-secondary mx-2" type="button" onClick={loadAllCustomers}>Load
                            All
                        </button>
                    </div>
                </form>
            </div>
            {/* Customer Table */}
            <div className="row justify-content-center mt-5">
                <div className="col-12">
                    <table className="table table-bordered table-striped">
                        <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Salary</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} onClick={() => handleRowClick(customer)}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.address}</td>
                                <td>{customer.salary}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}