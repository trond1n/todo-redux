import { React} from "react";

const Header = ({toDo, done}) => {
  return <div>
      <h1>Todo List</h1>
      <div> <p>{`${toDo} more to do, ${done} done`}</p></div>
  </div>;
};
export default Header;
