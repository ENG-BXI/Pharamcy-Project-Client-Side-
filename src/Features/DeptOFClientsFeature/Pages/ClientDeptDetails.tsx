import SectionTitle from '@/Components/SectionTitle';
import AddNewDeptClientDialogContent from '../Components/AddNewDeptClientDialogContent';
import ClientDeptDetailsTable from '../Components/ClientDeptDetailsTable';

const ClientDeptDetails = () => {
  return (
    <section>
      <SectionTitle title='ديون محمد خالد' hasBackButton hasButton buttonText='اضافة دين' isButtonOpenDialog dialogContent={<AddNewDeptClientDialogContent />} />
      <ClientDeptDetailsTable />
    </section>
  );
};

export default ClientDeptDetails;
