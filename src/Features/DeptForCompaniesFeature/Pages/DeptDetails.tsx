import SectionTitle from '@/Components/SectionTitle';
import AllDeptDetailsTable from '../Components/AllDeptDetailsTable';
import {PayDeptDialogContent} from '../Components/PayDeptDialog';

const DeptDetails = () => {
  return (
    <section>
      <SectionTitle title='دفعات دين 40000' hasButton isButtonOpenDialog buttonText='تسديد دين' dialogContent={<PayDeptDialogContent />} />
      <AllDeptDetailsTable />
    </section>
  );
};

export default DeptDetails;
