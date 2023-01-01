import { createSlice } from "@reduxjs/toolkit";

import { readEmployeesFromStorage, updateEmployeesStorage } from "../utils/employeeLocalStorage";

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
    },
    reducers: {
        read: () => {
            return { employees: readEmployeesFromStorage() }
        },
        create: (state, action) => {
            const employees = state.employees;

            employees.push(action.payload);

            updateEmployeesStorage(employees)

            return employees
        }
    },
});
  
export const { read, create } = employeeSlice.actions;

export default employeeSlice.reducer;
