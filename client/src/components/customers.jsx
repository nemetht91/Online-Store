import React, {useEffect, useState} from "react";
import Customer from "./customer";


function Customers(){

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch("http://localhost:5000/api/customers");
            console.log(response);

            const data = await response.json();

            setCustomers(data);
            console.log(customers);
        }
        fetchCustomers();
    })


    return (
        <div>
            {customers.map((customer) => {
                return <Customer
                    id= {customer.id}
                    firstName = {customer.firstName}
                    lastName = {customer.lastName}
                />

            })}
        </div>
    )
}

export default Customers;