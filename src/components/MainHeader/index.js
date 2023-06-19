import IconMenu from "./IconMenu";
import UserProfile from "./UserProfile";
import Search from "./Search";


export default function MainHeader({toggleSideBar}) {
  return (
    <div className="px-4 md:px-8 lg:px-12 sticky top-0 right-0 bg-white z-50 flex justify-between items-center h-20 w-full border-b border-b-grey-light-1">
      <Search />
      <div className={"flex items-center gap-10"}>
        <IconMenu />
        <UserProfile />
      </div>
    </div>
  );
}
