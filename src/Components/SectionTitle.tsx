import type {ReactNode} from 'react';
import CustomButton from './CustomButton';
import {Dialog, DialogTrigger} from './ShadCn/dialog';
import {ArrowRight} from 'lucide-react';
import {useNavigate} from 'react-router';

interface ISectionTitle {
  title: string;
  hasButton?: boolean;
  buttonText?: string;
  hasBackButton?: boolean;
  onclick?: () => void;
  isButtonOpenDialog?: boolean;
  dialogContent?: ReactNode;
}

const SectionTitle = ({title, hasButton = false, buttonText, hasBackButton = false, onclick, isButtonOpenDialog = false, dialogContent}: ISectionTitle) => {
  const nav = useNavigate();
  return (
    <div className='flex items-end justify-between mb-5'>
      <div className='flex items-center gap-x-2'>
        {/* Back Button */}
        {hasBackButton && (
          <div onClick={() => nav(-1)} className='border cursor-pointer rounded-sm border-black px-2 pb-1 flex gap-x-1 items-end text-base/6'>
            <ArrowRight className='w-5 h-5' /> رجوع
          </div>
        )}
        <div className='text-D-h4 font-semibold '>{title}</div>
      </div>
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
