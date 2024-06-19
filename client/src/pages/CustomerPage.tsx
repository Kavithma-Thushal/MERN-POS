import {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const baseUrl = "http://localhost:8080/api/v1/customer";

interface Customer {
    id: string;
    name: string;
    address: string;
    salary: string;
}

export function CustomerPage() {

    const [customerId, setCustomerId] = useState<string>('');
    const [customerName, setCustomerName] = useState<string>('');
    const [customerAddress, setCustomerAddress] = useState<string>('');
    const [customerSalary, setCustomerSalary] = useState<string>('');
    const [customers, setCustomers] = useState<Customer[]>([]);

    const saveCustomer = async () => {
        const customerOb = {
            id: customerId,
            name: customerName,
            address: customerAddress,
            salary: customerSalary
        };

        try {
            await axios.post(`${baseUrl}/saveCustomer`, customerOb, {headers: {'Content-Type': 'application/json'}});
            alert("Customer Saved Successfully...!");
        } catch (error) {
            alert("Customer Save Error...!");
        }
    };

    const searchCustomer = async () => {
        try {
            const response = await axios.get<Customer>(`${baseUrl}/searchCustomer/${customerId}`);
            const customer = response.data;
            setCustomerName(customer.name);
            setCustomerAddress(customer.address);
            setCustomerSalary(customer.salary);
            console.log("Customer Searched Successfully...!");
        } catch (error) {
            console.log("Customer Search Error...!", error);
        }
    };

    const updateCustomer = async () => {
        const customerOb = {
            id: customerId,
            name: customerName,
            address: customerAddress,
            salary: customerSalary
        };

        try {
            await axios.put(`${baseUrl}/updateCustomer`, customerOb, {headers: {'Content-Type': 'application/json'}});
            alert("Customer Updated Successfully...!");
        } catch (error) {
            alert("Customer Update Error...!");
        }
    };

    const deleteCustomer = async () => {
        try {
            await axios.delete(`${baseUrl}/deleteCustomer/${customerId}`);
            alert("Customer Deleted Successfully...!");
        } catch (error) {
            alert("Customer Delete Error...!");
        }
    };

    const loadAllCustomers = async () => {
        try {
            const response = await axios.get<Customer[]>(`${baseUrl}/loadAllCustomers`);
            setCustomers(response.data);
        } catch (error) {
            console.log("Load All Customers Error...!", error);
        }
    };

    return (
        <main className="container my-5">
            <h1 className="text-center mb-4 fw-bold">Customer Management</h1>
            {/* Customer Form */}
            <div className="row justify-content-center">
                <form className="col-12 col-md-8 col-lg-6">
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
                        <button className="btn btn-primary mx-2" type="button" onClick={saveCustomer}>Save</button>
                        <button className="btn btn-success mx-2" type="button" onClick={searchCustomer}>Search</button>
                        <button className="btn btn-warning mx-2" type="button" onClick={updateCustomer}>Update</button>
                        <button className="btn btn-danger mx-2" type="button" onClick={deleteCustomer}>Delete</button>
                        <button className="btn btn-secondary mx-2" type="button" onClick={loadAllCustomers}>Load All
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
                            <tr key={customer.id}>
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