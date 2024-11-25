import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
     
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");

    const user = { name, email };

    console.log(user);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          alert("Successful");
          e.target.reset();
        }
      });
  };

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
}

export default App;
