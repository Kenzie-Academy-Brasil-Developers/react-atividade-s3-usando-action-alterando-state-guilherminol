import "./App.css";
import { useSelector } from "react-redux";
import UserCard from "./components/UserCard";
function App() {
  const name = useSelector((state) => state.user.name);

  return (
    <div className="App">
      <UserCard></UserCard>
      <h1> Nome: {name} </h1>
    </div>
  );
}

export default App;
