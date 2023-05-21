import { useDispatch,useSelector } from "react-redux";
import { setSearchQuery } from "../store/slice/listslice";

const Search = () => { 
    const dispatch = useDispatch();

    const handleSearch = (searchText) => {
        dispatch(setSearchQuery(searchText))
    }
    
    return(
        <div>
        <label>Search:&nbsp;</label>
        <input type="text"  placeholder="search names" onChange={e => handleSearch(e.target.value)}/>
      </div>
    )
}

export default Search;