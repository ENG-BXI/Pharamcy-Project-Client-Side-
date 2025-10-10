import {DialogContent, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import CustomButton from '@/Components/CustomButton';

function AddNewAccountBankDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-M-h2 text-center'>اضافة حساب جديدة</DialogTitle>
      </DialogHeader>
      <div className='flex flex-col gap-y-4'>
        <CustomLabelAndInput label='اسم البنك' />
        <CustomLabelAndInput label='رقم الحساب' />
        <CustomButton className='self-center w-full max-w-70'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}
export default AddNewAccountBankDialogContent;
