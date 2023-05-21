import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { sortList } from "../store/slice/listslice";
import sorticon from "../images/sorticon.jpeg";


const List = () => {
    const [sortData, setSortData] = useState('asc');
    const dispatch = useDispatch();
    const listdata = useSelector((state) => state.list.list);
    let sortedList = [...listdata];

    const handleSort = (field,sortData) => {
        let res = sortedList.sort((a, b) => {
            const nameA = field == "firstName" ? a.firstName.toLowerCase(): a.lastName.toLowerCase();
            const nameB = field == "firstName" ? b.firstName.toLowerCase() : b.lastName.toLowerCase();
            if(sortData == "asc"){
                if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }
                  return 0;
            }
            else{
                if (nameA > nameB) {
                    return -1;
                  }
                  if (nameA < nameB) {
                    return 1;
                  }
                  return 0;     
            }
            
        }
          );
          setSortData((prevSortData) => (prevSortData === 'asc' ? 'desc' : 'asc'));
          dispatch(sortList(res));
    }

    return(
        <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("firstName",sortData)}>
                First Name &nbsp;
                <img src={sorticon}/></th>
            <th onClick={() => handleSort("lastName",sortData)}>Last Name&nbsp;
            <img src={sorticon}/></th>
            <th>Email</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {listdata.length > 0 ? listdata.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.dob}</td>
              <td>{employee.address}</td>
              <td>{employee.salary}</td>
            </tr>
          )) : <tr><td colSpan={6}>no data found</td></tr>}
        </tbody>
      </table>
    )
}

export default List;