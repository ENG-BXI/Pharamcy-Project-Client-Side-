import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import CustomButton from '@/Components/CustomButton';
const PaymentDeptOfClientDialogContent = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-center text-M-h2'>اضافة سداد دين جديد</DialogTitle>
      </DialogHeader>
      <DialogDescription></DialogDescription>
      <div className='flex flex-col gap-y-3'>
        <CustomLabelAndInput label='المبلغ' isAutofocus />
        <CustomLabelAndInput label='التاريخ' />
        <CustomLabelAndInput label='المتبقي' />
        <CustomButton className='self-center w-full max-w-70'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
};

export default PaymentDeptOfClientDialogContent;
