import axios from 'axios'
import { useEffect, useState } from 'react'
function Test() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);
    useEffect(() => {
     axios.get(url)
         .then((response) => {
             console.log(response.data);
            setData(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
     }, []);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>City</th>
                    <th>Company</th>
                    <th>Phone Number</th>
                    <th>zip Code</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>{item.address.city}</td>
                        <td>{item.company.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.address.zipcode}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}   
export default Test;
