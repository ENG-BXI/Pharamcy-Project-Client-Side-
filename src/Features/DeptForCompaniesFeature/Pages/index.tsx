import SectionTitle from '@/Components/SectionTitle';
import AddNewDeptDialogContent from '../Components/AddNewDeptDialogContent';
import AddAllDeptOfCompanyTable from '../Components/AddAllDeptOfCompanyTable';

const DeptForCompanies = () => {
  return (
    <section>
      <SectionTitle title='الديون للشركات' buttonText='اضافة دين' hasButton isButtonOpenDialog dialogContent={<AddNewDeptDialogContent />} />
      <AddAllDeptOfCompanyTable />
    </section>
  );
};

export default DeptForCompanies;
