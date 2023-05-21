import { useDispatch } from "react-redux";
import { useEffect } from "react";
import List from '../component/List';
import Dropdown from '../component/Dropdown';
import Search from '../component/Search';
import { setList } from "../store/slice/listslice";
import data from "../data";


const Appdetail = () => {
   
    const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setList(data))
   },[])


    return (
        <>
        <div className='row'>
        <Search/>
        <Dropdown/>
        </div>
        <List />
        </>
    )
}

export default Appdetail;