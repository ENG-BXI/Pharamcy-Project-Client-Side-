import CustomButton from '@/Components/CustomButton';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
function AddNewDeptDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-center text-M-h2'>اضافة دين جديدة</DialogTitle>
      </DialogHeader>
      <DialogDescription></DialogDescription>
      <div className='flex flex-col gap-y-3'>
        <CustomLabelAndInput label='اسم الشركة' />
        <CustomLabelAndInput label='الدين' />
        <CustomLabelAndInput label='تفاصيل' />
        <CustomButton className='self-center w-full max-w-70'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}

export default AddNewDeptDialogContent;
