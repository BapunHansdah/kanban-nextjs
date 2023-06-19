import { Link } from "../../assets/icons/Link";
import { EditPen } from "../../assets/icons/EditPen";
import { AddSquare } from "../../assets/icons/AddSquare";
import Users from "../UI/Users";


export default function ProjectHeader() {
  return (
    <div className={"w-full flex flex-col gap-4 lg:flex-row lg:justify-between items-center lg:gap-0 mt-10"}>
      <div className={"flex gap-[17px] items-center self-start"}>
        <h1 className={"font-semibold text-black -mt-3 text-3xl lg:text-[46px]"}>Mobile App</h1>
        <EditPen />
        <Link />
      </div>
      <div className={"flex items-center justify-around self-end"}>
        <AddSquare />
        <span className={"text-base font-medium text-blue ml-2 mr-3 -mt-1"}>Invite</span>
        <Users users={["User1", "User4", "User3", "User2", "User5", "User6"]} width="38px" height="38px" overlap="left" offset="8"/>
      </div>
    </div>
  );
}
