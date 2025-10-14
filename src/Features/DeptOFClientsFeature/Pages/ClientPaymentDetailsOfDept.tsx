import SectionTitle from '@/Components/SectionTitle';
import PaymentDeptOfClientDialogContent from '../Components/PaymentDeptOfClientDialogContent';
import ClientPaymentDetailsOfDeptTable from '../Components/ClientPaymentDetailsOfDeptTable';

const ClientPaymentDetailsOfDept = () => {
  return (
    <section>
      <SectionTitle title='تفاصيل سداد دين 5000' hasBackButton hasButton buttonText='تسديد' isButtonOpenDialog dialogContent={<PaymentDeptOfClientDialogContent />} />
      <ClientPaymentDetailsOfDeptTable />
    </section>
  );
};

export default ClientPaymentDetailsOfDept;
