import type {ReactNode} from 'react';
import {Button} from './ui/button';

const CustomButton = ({children, className, onclick}: {children: ReactNode; className?: string; onclick?: () => void}) => {
  return (
    <Button onClick={onclick} className={`bg-second ${className}`}>
      {children}
    </Button>
  );
};

export default CustomButton;
