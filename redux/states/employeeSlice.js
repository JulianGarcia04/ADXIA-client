import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employee',
    initialState:{
        value: {}
    },
    reducers:{
        setEmployeeAuth:(state, action)=>{
            state.value = action.payload;
        }
    }
})

export const {setEmployeeAuth} = employeeSlice.actions;

export default employeeSlice.reducer;