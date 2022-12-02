import { updateQuery } from "../../redux/reducers/searchReducer";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const dispatch = useDispatch();

    const queryHandler = (enteredValue: string) => {
        console.log(enteredValue);
        dispatch(updateQuery(enteredValue));
    }
    return <input placeholder="Search..." onChange={event => queryHandler(event.target.value)}/>
}
 
export default SearchBar;