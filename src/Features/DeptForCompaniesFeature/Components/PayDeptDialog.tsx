import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from '@/Components/ShadCn/dialog';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import CustomButton from '@/Components/CustomButton';

function PayDeptDialog() {
  return (
    <Dialog>
      <DialogTrigger className='cursor-pointer'>تسديد دين</DialogTrigger>
      <PayDeptDialogContent />
    </Dialog>
  );
}
export function PayDeptDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-center! text-M-h2'>اضافة دفعة سداد جديدة</DialogTitle>
      </DialogHeader>
      <DialogDescription></DialogDescription>
      <div className='flex flex-col gap-y-3'>
        <CustomLabelAndInput label='السعر' isAutofocus />
        <CustomLabelAndInput label='تاريخ السداد' />
        <CustomButton className='w-full max-w-70 mx-auto'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}
export default PayDeptDialog;
