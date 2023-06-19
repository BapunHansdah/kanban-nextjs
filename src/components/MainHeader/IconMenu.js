import { Calendar2 } from "../../assets/icons/Calendar2";
import { MessageQuestion } from "../../assets/icons/MessageQuestion";
import { Notification } from "../../assets/icons/Notification";


export default function IconMenu() {
  return (
    <span className={"flex gap-6"}>
      <Calendar2 />
      <MessageQuestion />
      <Notification />
    </span>
  );
}
