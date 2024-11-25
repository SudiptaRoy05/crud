import { useLoaderData } from "react-router-dom";

export default function Users() {
  const users = useLoaderData();

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deleteCount > 0) {
          alert("deleted successfully");
        }
      });
  };

  return (
    <div>
      <h2>Users {users.length}</h2>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            {user.name}
            {" : "}
            {user.email}
            {" : "} <button onClick={() => handleDelete(user._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}
