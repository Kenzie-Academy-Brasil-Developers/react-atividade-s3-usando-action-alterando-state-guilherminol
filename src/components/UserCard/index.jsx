import { useDispatch } from "react-redux";
import { changeName } from "../../store/modules/user/actions.js";
import { useState } from "react";
import { NameInput, Button } from "./style.js";
const UserCard = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState();
  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <div>
      <NameInput
        placeholder="Digite um nome"
        onChange={(e) => setNewName(e.target.value)}
        type="text"
      />
      <Button onClick={handleClick}>Mudar</Button>
    </div>
  );
};

export default UserCard;
