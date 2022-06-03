import React, { useEffect, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders , setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(()=>{
        if(user){
            fetch(`https://calm-taiga-49700.herokuapp.com/booking?customer=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}` 
                }
            })
            .then(res =>{
                console.log('res',res);
                if(res.status === 401 || res.status === 403){
                    navigate('/home')
                }
                return res.json()})
            .then(data => {

                setOrders(data)
            });
        }
    }, [user])

    return (
        <div>
            <h1>orders:{orders.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>Price</th>
        <th>Payment</th>
        <th>Remove Order</th>
      </tr>
    </thead>
    <tbody>
    {
        orders.map((a,index) => <tr>
            <th>{index+1}</th>
            <td>{a.customer}</td>
            <td>{a.product}</td>
            <td>{a.price}</td>
            <td><button className="btn btn-xs">Payment</button></td>
            <td><button className="btn btn-xs">Remove user</button></td>

          </tr> )
    }
     
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;