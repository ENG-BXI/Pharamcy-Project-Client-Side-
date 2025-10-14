import CustomButton from '@/Components/CustomButton';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
function AddNewUserDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-center text-M-h2'>اضافة مستخدم جديد</DialogTitle>
      </DialogHeader>
      <DialogDescription></DialogDescription>
      <div className='flex flex-col gap-y-3'>
        <CustomLabelAndInput label='اسم الشحص' />
        <CustomLabelAndInput label='ايميل المستخدم' />
        <CustomLabelAndInput label='كلمة السر' />
        <CustomLabelAndInput label='الصلاحية' />
        <CustomButton className='self-center w-full max-w-70'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}

export default AddNewUserDialogContent;
