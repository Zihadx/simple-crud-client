import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users , setUsers] = useState(loadedUsers);
  const handleDeleteUser = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
          const remainingUsers = users.filter((user) => (user._id !== _id));
          setUsers(remainingUsers);
        }
      });
  };
  return (
    <div>
      <h3>All users show here: {users.length}</h3>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} : {user._id}
            <button onClick={() => handleDeleteUser(user._id)}>x</button>
             <span> </span> 
             <Link to={`/update/${user._id}`}><button >Update</button></Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
