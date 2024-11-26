import { useLoaderData } from "react-router-dom";

export default function Update() {
  const user = useLoaderData();
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
