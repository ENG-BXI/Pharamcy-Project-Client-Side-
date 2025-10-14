import CustomButton from '@/Components/CustomButton';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import {DialogContent, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
function AddNewClientDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-center text-M-h2'>اضافة عميل جديد</DialogTitle>
      </DialogHeader>
      <div className='flex flex-col gap-y-3'>
        <CustomLabelAndInput label='اسم الشحص' isAutofocus />
        <CustomLabelAndInput label='مبلغ الدين' />
        <CustomLabelAndInput label='تفاصيل' />
        <CustomButton className='self-center w-full max-w-70'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}

export default AddNewClientDialogContent;
