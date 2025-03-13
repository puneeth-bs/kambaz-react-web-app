import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    assignments:assignments,
    assignment:{
                    title:"",
                    course:"",
                    points:"",
                    description:"",
                    dueDate:"",
                    fromDate:"",
                    untilDate:"",
                    notUntilDate:""
    }
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers:{
        // addAssignment:(state,{payload:assignment}) => {
        //     const newAssignment: any = {
        //         _id:uuidv4(),
        //         title:assignment.title,
        //         course:assignment.course,
        //         points:assignment.points,
        //         description:assignment.description,
        //         dueDate:assignment.dueDate,
        //         fromDate:assignment.fromDate,
        //         untilDate:assignment.untilDate,
        //         notUntilDate:assignment.notUntilDate
        //     };
        //     state.assignments = [...state.assignments, newAssignment] as any;
        // },
        addAssignment: (state, action) => {    state.assignments = [...state.assignments,{...action.payload, _id: uuidv4(),}];    
        state.assignment = {
                    title:"",
                    course:"",
                    points:"",
                    description:"",
                    dueDate:"",
                    fromDate:"",
                    untilDate:"",
                    notUntilDate:""
            }},
    setAssignment: (state, action) => {
        state.assignment = action.payload;
    },
    updateAssignment: (state, action) => {
        state.assignments = (state.assignments = state.assignments.map((a: any) =>
            action.payload._id  === a._id ? action.payload : a
        ));
        state.assignment = {
            title:"",
            course:"",
            points:"",
            description:"",
            dueDate:"",
            fromDate:"",
            untilDate:"",
            notUntilDate:""
        }
    },
    deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
            (a: any) => action.payload  !== a._id
        );
    },

    },
    
    
})
export const { addAssignment,setAssignment,updateAssignment,deleteAssignment} =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;
