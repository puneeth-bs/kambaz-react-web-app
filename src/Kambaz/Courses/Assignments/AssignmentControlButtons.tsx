import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <span><div style={{ top: "2px", float: "left", border: "black" }} className="me-1 position-relative fs-5 border border-black rounded-pill p-1">
        40% of Total
      </div></span>
      <BsPlus className="fs-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>


  );
}