import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark"
import { deleteAssignment } from "./reducer";
import { FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
export default function IndividualAssignmentControlButtons(
  {deleteAssignmentId}:{deleteAssignmentId:String;}
) {
    const { assignment } = useSelector((state: any) => state.assignmentReducer);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    console.log(assignment._id)
  return (
    <div className="float-end">
    {currentUser.role === "FACULTY" && <FaTrash className="text-danger me-2 mb-1" onClick={(e) => {
                                        e.preventDefault();            const confirmDeleteWin = window.confirm(
                                            " You are going to delete this assignment. Are you sure you want to proceed?"
                                        );
                                        if (confirmDeleteWin) {
                                          dispatch(deleteAssignment(deleteAssignmentId));
                                        }
                                    }} />}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}