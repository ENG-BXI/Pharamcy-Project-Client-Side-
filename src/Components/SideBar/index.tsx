import AllSideBarItem from './AllSideBarItem';
import SideBarLogo from './SideBarLogo';

const SideBar = () => {
  return (
    <aside className='relative h-full w-65 py-10 px-7 bg-primary text-white'>
      <SideBarLogo />
      <AllSideBarItem />
    </aside>
  );
};

export default SideBar;
