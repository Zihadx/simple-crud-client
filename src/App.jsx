import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Users added successfully");
          form.reset();
        }
      });
  };
  return (
    <div>
      <h1>Simple crud Example</h1>
      <Link to="/users">Users</Link>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <br />
        <input type="submit" value="add user" />
      </form>
    </div>
  );
}

export default App;
