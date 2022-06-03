import React from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import auth from '../../../firebase.init';


const OrderModal = ({order , setOrder}) => {
    const { _id,name,img,description,minimumOrderQuantity,availableQuantity,price}=order;
    const [user] = useAuthState(auth);
   
    

    const handleSubmit = event=>{
        event.preventDefault();

        const booking = {
          orderId: _id,
          price,
          product:name,
          customer: user.email,
          customerName:user.displayName,
          address: event.target.address.value,
          phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking',{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.success){
            toast(`Order is Placed, ${name}`)
          }
          else{
            toast(`Order is Placed Already, ${name}`)
          }
          setOrder(null);
        })

       
    }
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label for="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 justify-items-center m-5">
        <h3 className="font-bold text-lg">
            Name : {name}
          </h3>
          <img className="" src={img} alt=''/>
          <h3 className="font-bold text-lg">
            Description : {description}
          </h3>
          <h3 className="font-bold text-lg">
            Minimum Order Quantity : {minimumOrderQuantity}</h3>
          <h3 className="font-bold text-lg">
             Available Quantity : {availableQuantity}
          </h3>
          <h3 className="font-bold text-lg">price: {price}</h3>
          <h3 className="text-4xl text-center"> Place Order</h3>
          <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered input-primary w-full max-w-xs" />

          <input type="text" name="email" disabled value={user?.email || ''} className="input input-bordered input-primary w-full max-w-xs" />

          <input type="text" name="address" placeholder="Your Address" className="input input-bordered input-primary w-full max-w-xs" />

          <input type="text" name="phone" placeholder="Your Number" className="input input-bordered input-primary w-full max-w-xs" />

          <input type="submit"  className="btn btn-primary" />
        </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
