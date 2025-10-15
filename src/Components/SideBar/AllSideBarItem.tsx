import type {ISideBarItem, ISideBarItemWithSubItem} from '../../Types/SIdeBarItem';
import SideBarItem from './SideBarItem';
import SubSideBarItem from './SubSideBarItem';

function AllSideBarItem() {
  const listOfItem: (ISideBarItem | ISideBarItemWithSubItem)[] = [
    {
      title: 'الرئيسية',
      path: '/'
    },
    {
      title: 'المشتريات',
      path: '/purchases'
    },
    {
      title: 'المخزون',
      SubSideBarItems: [
        {
          title: 'كل الادوية',
          path: '/inventory'
        },
        {
          title: 'المنتهي من الادوية',
          path: '/inventory/expired-drugs'
        }
      ]
    },
    {
      title: 'المستخدمين',
      path: '/users'
    },
    {
      title: 'الشركات',
      path: '/companies'
    },
    {
      title: 'الديون للشركات',
      path: '/dept-for-companies'
    },
    {
      title: 'الديون للعملاء',
      path: '/dept-of-clients'
    }
  ];
  return (
    <div className='flex flex-col gap-y-2'>
      {listOfItem.length > 0 &&
        listOfItem.map((item, index) => {
          if ((item as ISideBarItemWithSubItem)?.SubSideBarItems) return <SubSideBarItem item={item as ISideBarItemWithSubItem} />;
          else return <SideBarItem title={(item as ISideBarItem).title} path={(item as ISideBarItem).path} key={index} />;
        })}
      <SideBarItem title={'تسجيل الخروج'} path={''} />
    </div>
  );
}

export default AllSideBarItem;
