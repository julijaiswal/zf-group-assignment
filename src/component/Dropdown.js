import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSalaryFilter } from "../store/slice/listslice";


const Dropdown  = () => {
    const [salary, setSalary] = useState("");
    const dispatch = useDispatch();
    let option =["100000-500000","500001-1000000","1000001-2000000"]

    const handleFilterChange = (event) => {
         const selectedValue = event.target.value;
        setSalary(selectedValue);
        dispatch(setSalaryFilter(selectedValue))
      };

    return(
        <div>
        <label>Filter by Salary:&nbsp;</label>
        <select value={salary} onChange={handleFilterChange}>
          <option value="">All</option>
          {option.map((data, index) => (
            <option value={data} key={index}>{data}</option>
           ))}
        </select>
      </div>
    )
}

export default Dropdown;