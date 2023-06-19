import { Home } from "../../assets/icons/Home";
import { Message } from "../../assets/icons/Message";
import { Task } from "../../assets/icons/Task";
import { Member } from "../../assets/icons/Member";
import { Setting } from "../../assets/icons/Setting";


export default function NavMenu({showSideBarText}) {
  return (
    <ul className={"my-0 mx-[13px] py-[30px] px-0 flex flex-col gap-[25px] border-b border-b-grey-light-1"}>
      <li className={"flex text-base font-medium text-grey gap-[14px] sm:ml-[9px]"}>
        <Home />
        <span className={`hidden md:block`}>Home</span>
      </li>
      <li className={"flex text-base font-medium text-grey gap-[14px] sm:ml-[9px]"}>
        <Message />
        <span className={`hidden md:block`}>Messages</span>
      </li>
      <li className={"flex text-base font-medium text-grey gap-[14px] sm:ml-[9px]"}>
        <Task />
        <span className={`hidden md:block`}>Tasks</span>
      </li>
      <li className={"flex text-base font-medium text-grey gap-[14px] sm:ml-[9px]"}>
        <Member />
        <span className={`hidden md:block`}>Members</span>
      </li>
      <li className={"flex text-base font-medium text-grey gap-[14px] sm:ml-[9px]"}>
        <Setting />
        <span className={`hidden md:block`}>Settings</span>
      </li>
    </ul>
  );
}
