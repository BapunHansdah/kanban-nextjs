import { ArrowDown } from "../../assets/icons/ArrowDown";
import { Filter } from "../../assets/icons/Filter";
import { Calendar } from "../../assets/icons/Calendar";
import { Profile } from "../../assets/icons/Profile";
import { Menu } from "../../assets/icons/Menu";
import { Pause } from "../../assets/icons/Pause";
import Tab from "../UI/Tab";


export default function TabsContainer() {
  return (
    <div className={"w-full mt-10 flex justify-between items-center"}>
      <div className={"flex items-center justify-around w-full md:justify-normal md:gap-3"}>
        <Tab>
          <Filter />
          <span>Filter</span>
          <ArrowDown />
        </Tab>
        <Tab>
          <Calendar />
          <span>Today</span>
          <ArrowDown />
        </Tab>
        <span className={"hidden sm:block lg:hidden"}>
          <Tab>
            <Profile />
            <span>Share</span>
          </Tab>
        </span>
      </div>
      <div className={"hidden lg:flex items-center gap-5"}>
        <Tab>
          <Profile/>
          <span>Share</span>
        </Tab>
        <div className={"w-0 h-7 border border-grey"}></div>
        <Pause />
        <Menu />
      </div>
    </div>
  );
}
