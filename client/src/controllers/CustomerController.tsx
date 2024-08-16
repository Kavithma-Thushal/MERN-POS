import {useState, useEffect} from "react";
import axios from "axios";

export function CustomerController() {

    const baseUrl = "http://localhost:8080/api/v1/customer";

    interface Customer {
        id: string;
        name: string;
        address: string;
        salary: string;
    }

    useEffect(() => {
        loadAllCustomers();
    }, []);

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
            loadAllCustomers();
            clearCustomerInputs();
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
            loadAllCustomers();
            clearCustomerInputs();
            alert("Customer Updated Successfully...!");
        } catch (error) {
            alert("Customer Update Error...!");
        }
    };

    const deleteCustomer = async () => {
        try {
            await axios.delete(`${baseUrl}/deleteCustomer/${customerId}`);
            loadAllCustomers();
            clearCustomerInputs();
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

    const clearCustomerInputs = () => {
        setCustomerId('');
        setCustomerName('');
        setCustomerAddress('');
        setCustomerSalary('');
    };

    const handleRowClick = (customer: Customer) => {
        setCustomerId(customer.id);
        setCustomerName(customer.name);
        setCustomerAddress(customer.address);
        setCustomerSalary(customer.salary);
    };

    return {
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
    };
}