import CustomButton from '@/Components/CustomButton';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
function AddNewBatchDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-M-h2 text-center'>اضافة دفعة جديدة</DialogTitle>
      </DialogHeader>
      <DialogDescription></DialogDescription>
      <div className='flex flex-col gap-y-3 '>
        <CustomLabelAndInput label='تاريخ الشراء' />
        <CustomLabelAndInput label='تاريخ الانتاج' />
        <CustomLabelAndInput label='تاريخ الانتهاء' />
        <CustomLabelAndInput label='سعر الحبة' />
        <CustomLabelAndInput label='الكمية' />
        <CustomButton className='self-center max-w-70 w-full'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}
export default AddNewBatchDialogContent;
