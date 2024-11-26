import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
  const usersData = useLoaderData();

  const [showUsers, setUsers] = useState(usersData);

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
          const remainingUsers = showUsers.filter((user) => user._id !== id);
          setUsers(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h2>Users {showUsers.length}</h2>
      <div>
        {showUsers.map((user) => (
          <div key={user._id}>
            {user.name}
            {" : "}
            {user.email}
            {" : "}
            <Link to={`/update/:${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
