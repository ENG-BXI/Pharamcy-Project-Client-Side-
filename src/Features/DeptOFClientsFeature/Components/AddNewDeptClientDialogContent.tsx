import CustomButton from '@/Components/CustomButton';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
function AddNewDeptClientDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-M-h2 text-center'>اضافة دين جديدة</DialogTitle>
      </DialogHeader>
      <DialogDescription></DialogDescription>
      <div className='flex flex-col gap-y-3'>
        <CustomLabelAndInput label='السعر' />
        <CustomLabelAndInput label='تاريخ الدين' />
        <CustomLabelAndInput label='ملاحظات' />
        <CustomButton className='self-center w-full max-w-70'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}

export default AddNewDeptClientDialogContent;
