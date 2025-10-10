import {DialogContent, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import CustomButton from '@/Components/CustomButton';

function AddNewContactNumberDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-M-h2 text-center'>اضافة رقم جديدة</DialogTitle>
      </DialogHeader>
      <div className='flex flex-col gap-y-4'>
        <CustomLabelAndInput label='رقم الهاتف' />
        <CustomLabelAndInput label='تفاصيل' />
        <CustomButton className='self-center w-full max-w-70'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}
export default AddNewContactNumberDialogContent;
