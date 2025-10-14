import SectionTitle from '@/Components/SectionTitle';
import AddNewClientDialogContent from '../Components/AddNewClientDialogContent';
import DeptOfClientsTable from '../Components/DeptOfClientsTable';


const DeptOfClientsFeature = () => {
  return (
    <section>
      <SectionTitle title='ديون العملاء' hasButton buttonText='اضافة عميل' isButtonOpenDialog dialogContent={<AddNewClientDialogContent />} />
      <DeptOfClientsTable />
    </section>
  );
};

export default DeptOfClientsFeature;
