import { configureStore } from "@reduxjs/toolkit";
import {employeeSlice} from './states/'

export default configureStore({
    reducer:{
        employeeAuth : employeeSlice
    }
})