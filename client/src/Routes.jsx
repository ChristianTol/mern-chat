import { useContext } from "react";
import Register from "./Register";
import { UserContext } from "./UserContext";

export default function Routes() {
  const { username, id } = useContext(UserContext);

  if (username) {
    return <div>Logged in as {username}!</div>;
  } else {
    return <Register />;
  }
}
