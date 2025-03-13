import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
// import { v4 as uuidv4 } from "uuid";
const initialState = {
    courses:courses,
    // course:{
    //     name: "New Course Name", 
     //     endDate: "2026-02-09", number: "New Course Number",description: "New Course Description",startDate: "2025-12-07",
       //   department: "D123",credits: 4,
    // }
};
const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers:{
        
        addCourse:(state,{payload:course})=>{
            state.courses = [...state.courses, course] as any;
        },
        updateCourse: (state, { payload :course}) => {
            state.courses = state.courses.map((c) => {
                    if ( course._id===  c._id) {
                        return course;
                    } else {
                        return c;}})
        },
        deleteCourse: (state, { payload : courseId }) => {
            state.courses =  (state.courses.filter((course) => courseId  !== course._id));
        }

    }
})
export const {addCourse,updateCourse,deleteCourse} =
courseSlice.actions;
export default courseSlice.reducer;