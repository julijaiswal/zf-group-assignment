import { createSlice } from '@reduxjs/toolkit'
import data from "../../data";

const listSlice = createSlice({
    name:"list",
    initialState:{
        list:""
    },
    reducers:{
        sortList(state,action){
          state.list = action.payload;
        },
        setSalaryFilter(state,action){
            state.list = action.payload != "" ? (data.filter((data) => {const [min, max] = action.payload.split("-").map(Number);return data.salary >= min && data.salary <= max;})) : (data)
        },
        setList(state,action){
          state.list = action.payload
        },
        setSearchQuery: (state, action) => {
            state.list =   data?.filter((val) => (val.firstName.toLowerCase().includes(action.payload) || val.lastName.toLowerCase().includes(action.payload)));
          },
    }
})
export const { setList, sortList,setSalaryFilter, setSearchQuery } = listSlice.actions;

export default listSlice;