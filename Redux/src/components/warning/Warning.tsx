
import { useSelector } from "react-redux";
import "./warning.css";

export default function Warning() {
   const name = useSelector(state=>state.user.name)
  return (
    <div className="warning">
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.
    </div>
  );
}
