import { Draggable } from "react-beautiful-dnd";

import { Menu1 } from "../../assets/icons/Menu1";
import { Message16 } from "../../assets/icons/Message16";
import { Folder } from "../../assets/icons/Folder";
import Users from "../UI/Users";


export default function TodoItem({ todo, index }) {
  const picturesObj = {
    MobileAppDesign: "/assets/images/MobileAppDesign.png",
    Moodboard1: "/assets/images/Moodboard1.png",
    Moodboard2: "/assets/images/Moodboard2.png",
    OnboardingIllustrations: "/assets/images/OnboardingIllustrations.png",
  };
  return (
    <Draggable draggableId={todo.id.toString()} key={todo.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className={"p-5 rounded-2xl bg-white"}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <header className={"flex justify-between items-center mb-1"}>
              <span
                className={`${"text-xs font-medium capitalize py-1 px-[6px] rounded-[4px]"} ${
                  todo.status === "completed"
                    ? "bg-green-light bg-opacity-20 text-green"
                    : todo.priority === "low"
                    ? "bg-yellow-light bg-opacity-20 text-yellow"
                    : "bg-red bg-opacity-10 text-red"
                }`}
              >
                {todo.status === "completed" ? todo.status : todo.priority}
              </span>
              <Menu1 />
            </header>
            <main className={"flex flex-col gap-[6px] mb-7"}>
              <h3 className={"text-lg font-semibold text-black"}>{todo.title}</h3>
              {todo.description && (
                <p className={"text-xs font-normal text-grey"}>{todo.description}</p>
              )}
              {todo.image.length !== 0 && (
                <div className={"grid grid-flow-col auto-cols-fr"}>
                  {todo.image.map((picture,i) => (
                    <img key={i} src={picturesObj[picture]} alt={picture} />
                  ))}
                </div>
              )}
            </main>
            <footer className={"flex justify-between items-center lg:flex-col lg:items-start lg:gap-2 xl:flex-row xl:items-center"}>
              <Users
                users={todo.users}
                width="24px"
                height="24px"
                offset="4"
                overlap="right"
              />
              <section className={"flex flex-col gap-[14px] sm:flex-row sm:items-center"}>
                <span className={"flex gap-[5px] items-center text-xs font-medium text-grey"}>
                  <Message16 />
                  {todo.comments + " comments"}
                </span>
                <span className={"flex gap-[5px] items-center text-xs font-medium text-grey"}>
                  <Folder />
                  {todo.files + " files"}
                </span>
              </section>
            </footer>
            {provided.placeholder}
          </div>
        );
      }}
    </Draggable>
  );
}
