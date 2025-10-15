import SectionTitle from '@/Components/SectionTitle';
import AllExpireDrugTable from '../Components/AllExpireDrugTable';

const ExpireDrugs = () => {
  return (
    <section>
      <SectionTitle title='الادوية التي شارفت على الانتهاء' />
      <AllExpireDrugTable />
    </section>
  );
};

export default ExpireDrugs;
