import type {ReactNode} from 'react';
import CustomButton from './CustomButton';
import {Dialog, DialogTrigger} from './ShadCn/dialog';

interface ISectionTitle {
  title: string;
  hasButton?: boolean;
  buttonText?: string;
  onclick?: () => void;
  isButtonOpenDialog?: boolean;
  dialogContent?: ReactNode;
}

const SectionTitle = ({title, hasButton = false, buttonText, onclick, isButtonOpenDialog = false, dialogContent}: ISectionTitle) => {
  return (
    <div className='flex items-end justify-between mb-5'>
      <div className='text-D-h4 font-semibold '>{title}</div>
      {hasButton &&
        (isButtonOpenDialog ? (
          <Dialog>
            <DialogTrigger>
              <CustomButton className='' onclick={onclick}>
                {buttonText}
              </CustomButton>
            </DialogTrigger>
            {dialogContent}
          </Dialog>
        ) : (
          <CustomButton className='' onclick={onclick}>
            {buttonText}
          </CustomButton>
        ))}
    </div>
  );
};

export default SectionTitle;
