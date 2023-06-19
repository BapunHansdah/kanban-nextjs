import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import NavMenu from "./NavMenu";
import MyProjects from "./MyProjects";
import Thoughts from "./Thoughts";
import {useState,useRef} from 'react'


export default function SideDrawer({ toggleSideBar,children, header }) {

     const [currentTab,setCurrentTab] = useState(0)
    const [menu,setMenu] = useState(true)
    const sideNavRef = useRef(null);

  return (
    <div className={`sticky top-0 left-0 min-h-screen`}>
      <header className={`h-20 border-b border-b-grey-light-1 flex justify-between items-center px-[13px] sm:px-[22px]`}>
        <span className={`flex items-center md:text-xl font-semibold text-black gap-[9px]`}>
          <img className="w-7 h-7" src={"/assets/images/colorfilter.png"} alt="color-filter" />
          <h2 className="hidden text-sm lg:text-lg lg:block">Project M.</h2>
        </span>
        <button onClick={toggleSideBar} className={"hidden md:block"}><ArrowLeft /></button>
      </header>
      <main>
        <NavMenu/>
        <MyProjects/>
        <Thoughts/>
      </main>
    </div>
  );
}

