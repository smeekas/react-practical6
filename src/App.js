import "./App.css";
import UserContainer from "./Container/UserContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./actions/userActions";
function App() {
  const dispatch = useDispatch();
  const perPage = useSelector((state) => state.pagination.perPage);
  console.log(perPage)
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="App">
      <UserContainer />
    </div>
  );
}

export default App;
