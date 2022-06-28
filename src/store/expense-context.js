import { createContext, useReducer } from "react";
// import TestData from "../test-data/test-data";

export const ADD_EXPENSE = "ADD_EXPENSE";
export const DELETE_EXPENSE = "DELETE_EXPENSE";
export const SET_EXPENSES = "SET_EXPENSES";

export const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
    switch (action.type) {
        case SET_EXPENSES:
            return { expenses: action.payload };
        case ADD_EXPENSE:
            const newExpenses = [action.payload, ...state.expenses];
            return { expenses: newExpenses };
        case DELETE_EXPENSE:
            const newExpenses2 = state.expenses.filter(
                (e) => e.id !== action.payload
            );
            return { expenses: newExpenses2 };
        default:
            return state;
    }
};

export const ExpenseContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expenseReducer, {
        expenses: [],
    });

    const setExpenses = (expenses) => {
        dispatch({ type: SET_EXPENSES, payload: expenses });
    };

    const addExpense = (newExpense) => {
        dispatch({ type: ADD_EXPENSE, payload: newExpense });
    };

    const deleteExpense = (expenseId) => {
        dispatch({ type: DELETE_EXPENSE, payload: expenseId });
    };

    const expenses = state.expenses;

    return (
        <ExpenseContext.Provider
            value={{ expenses, addExpense, deleteExpense, setExpenses }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};
