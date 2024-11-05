import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckMark";
import { FaPlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import ProtectedButton from "../../Account/ProtectedButton";
export default function ModuleControlButtons(
  { moduleId, deleteModule,editModule }: { 
    moduleId: string; deleteModule: (moduleId: string) => void; 
    editModule: (moduleId: string) => void }
) {
  return (
    <div className="float-end">
      <ProtectedButton>
       <FaPencil onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)}/>
      </ProtectedButton>
      <GreenCheckmark />
      <FaPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}