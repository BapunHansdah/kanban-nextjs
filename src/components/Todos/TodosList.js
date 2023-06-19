import { Droppable } from "react-beautiful-dnd";

import { Bullet } from "../../assets/icons/Bullet";
import { AddSquare } from "../../assets/icons/AddSquare";
import TodoItem from "./TodoItem";


export default function TodosList({ todosList, type, id }) {
  return (
    <div className={"relative bg-dusky-white rounded-2xl p-5 flex flex-col gap-5"}>
      <header
        className={`${"flex items-center gap-2 text-base font-medium text-black mb-2 pb-[22px] border-b-[3px] border-b-transparent"} ${
          type === "not-started"
            ? "border-b-[3px] border-b-[#5030e5]"
            : type === "started"
            ? "border-b-[3px] border-b-[#ffa500]"
            : "border-b-[3px] border-b-[#8bc48a]"
        }`}
      >
        <Bullet
          color={
            type === "not-started"
              ? "#5030E5"
              : type === "started"
              ? "#FFA500"
              : "#76A5EA"
          }
        />
        <span>
          {type === "not-started"
            ? "To Do"
            : type === "started"
            ? "On Progress"
            : "Done"}
        </span>
        <span className={"w-5 h-5 rounded-full bg-grey-light flex justify-center items-center text-xs font-medium text-dusky-black mx-1"}>{todosList.length}</span>
        {type === "not-started" && (
          <span className={"absolute top-[22px] right-[22px]"}>
            <AddSquare />
          </span>
        )}
      </header>
      <Droppable droppableId={id}>
        {(provided, snapshot) => {
          return (
            <div
              className={"flex flex-col gap-5"}
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {todosList.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id.toString()}
                  todo={todo}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}
