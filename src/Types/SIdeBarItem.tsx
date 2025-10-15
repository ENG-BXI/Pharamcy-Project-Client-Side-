import type {ReactNode} from 'react';

export interface ISideBarItem {
  title: string;
  path: string;
  icon?: ReactNode;
}
export interface ISideBarItemWithSubItem {
  title: string;
  SubSideBarItems: ISideBarItem[];
}
