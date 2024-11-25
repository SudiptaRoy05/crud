import { useLoaderData } from "react-router-dom";

export default function Users() {
  const users = useLoaderData();

  return (
    <div>
      <h2>Users {users.length}</h2>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            {user.name}
            {" : "}
            {user.email}
          </div>
        ))}
      </div>
    </div>
  );
}
