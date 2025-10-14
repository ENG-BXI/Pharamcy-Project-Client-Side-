import {Dialog} from '@/Components/ShadCn/dialog';
import {DialogTrigger} from '@radix-ui/react-dialog';
import PaymentDeptOfClientDialogContent from './PaymentDeptOfClientDialogContent';

function PaymentDeptOfClientDialog() {
  return (
    <Dialog>
      <DialogTrigger className='cursor-pointer'>تسديد الان</DialogTrigger>
      <PaymentDeptOfClientDialogContent />
    </Dialog>
  );
}

export default PaymentDeptOfClientDialog;
