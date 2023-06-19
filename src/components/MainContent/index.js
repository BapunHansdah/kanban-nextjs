import ProjectHeader from "./ProjectHeader";
import TabsContainer from "./TabsContainer";
import TodosContainer from "./TodosContainer";


export default function MainContent() {
  return <div className={"mx-4 md:mx-8 lg:mx-12"}>
    <ProjectHeader />
    <TabsContainer />
    <TodosContainer />
  </div>;
}
