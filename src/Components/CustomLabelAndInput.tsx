import type { ICustomLabelAndInput } from '@/Types/CustomLabelAndInput';
import {Input} from './ShadCn/input';

function CustomLabelAndInput({isRequired = false, isAutofocus = false, label}: ICustomLabelAndInput) {
  return (
    <div className='flex justify-between items-center gap-x-4'>
      <label htmlFor={label} className='text-nowrap'>
        {label} {isRequired && <span className='text-red-500'>*</span>} :
      </label>
      <Input id={label} autoFocus={isAutofocus} className='h-7 max-w-85' />
    </div>
  );
}
export default CustomLabelAndInput;
