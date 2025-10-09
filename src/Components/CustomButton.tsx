import type {ReactNode} from 'react';
import {Button} from './ui/button';

const CustomButton = ({children, className}: {children: ReactNode; className?: string}) => {
  return <Button className={`bg-second ${className}`}>{children}</Button>;
};

export default CustomButton;
