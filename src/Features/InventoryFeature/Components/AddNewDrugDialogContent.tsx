import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
import CustomButton from '@/Components/CustomButton';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';

function AddNewDrugDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-M-h2 text-center'>اضافة دواء جديد</DialogTitle>
      </DialogHeader>
      <DialogDescription></DialogDescription>
      <div className='flex flex-col gap-y-3 '>
        <CustomLabelAndInput label='الرقم التسلسلي' />
        <CustomLabelAndInput label='اسم الدواء' />
        <CustomLabelAndInput label='الصنف' />
        <CustomLabelAndInput label='الدفعة' />
        <CustomLabelAndInput label='السعر' />
        <CustomLabelAndInput label='الكمية' />
        <CustomButton className='self-center max-w-70 w-full'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}

export default AddNewDrugDialogContent;
