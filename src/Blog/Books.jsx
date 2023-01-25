import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "./store/userReducer";


const Books = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <>
    <div className="books">hello {user}</div>
    <button onClick={() => dispatch(getBooks())}></button>
    </>
  );
}
 
export default Books;