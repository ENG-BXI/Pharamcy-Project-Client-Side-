import type {ISideBarItemWithSubItem} from '@/Types/SIdeBarItem';
import {ArrowDown} from 'lucide-react';
import {useState} from 'react';
import {useNavigate} from 'react-router';
const SubSideBarItem = ({item}: {item: ISideBarItemWithSubItem}) => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  return (
    <div className={`side-bar-item text-D-p select-none duration-500 transition-all cursor-pointer px-2 py-1 last:absolute last:bottom-10 last:right-7 hover:bg-second/40 rounded-xl ${open && 'bg-second/20'}`}>
      <div
        onClick={() => {
          setOpen(pre => !pre);
        }}
        className='flex justify-between items-center '
      >
        <div className='flex items-center gap-x-2'>
          <div className='bg-gray-400 w-7 h-7 rounded-lg'></div>
          {item.title}
        </div>
        <ArrowDown className={`${open && 'rotate-180'}`} />
      </div>
      <ul className={`mt-3 ps-8 hidden ${open && 'block!'}`}>
        {item.SubSideBarItems.map((subItem, index) => {
          return (
            <li key={index} className='list-disc list-inside mb-2' onClick={() => nav(subItem.path)}>
              {subItem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubSideBarItem;
