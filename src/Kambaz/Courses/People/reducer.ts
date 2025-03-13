import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
    enrollments:enrollments
}
const enrollmentSlice = createSlice({
    name:"enrollments",
    initialState,
    reducers:{
        addStudentEnrollment:(state,{payload:{course,user}})=>{
            const newStudentEnrollment = {_id: uuidv4(),
                course:course._id,
                user:user._id
            }
            state.enrollments=[...enrollments,newStudentEnrollment]
        },
        removeStudentEnrollment:(state,{payload:{course,user}})=>{
            state.enrollments = state.enrollments.filter((enrollment)=>user._id !=  enrollment.user  && enrollment.course != course._id)
        }
    }
});
export const { addStudentEnrollment,removeStudentEnrollment} =
enrollmentSlice.actions;
export default enrollmentSlice.reducer;