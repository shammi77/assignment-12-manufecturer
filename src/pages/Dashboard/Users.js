import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data : users , isLoading , refetch} = useQuery('users', () =>
  fetch('https://calm-taiga-49700.herokuapp.com/user' ,{
      method:'GET',
      headers: { 
        authorization : `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
  return (
    <div>
      <h2 className="text-2xl">ALl Users:{users.length}</h2>
      <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
{
    users.map(user => <UserRow
    key={user._id}
    user={user}
    refetch={refetch}
    ></UserRow>)
}
   
    </tbody>
  </table>
  </div>
    </div>
  );
};

export default Users;
