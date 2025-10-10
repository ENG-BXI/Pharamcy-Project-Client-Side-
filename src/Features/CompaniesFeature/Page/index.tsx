import SectionTitle from '@/Components/SectionTitle';
import AddNewCompanyDialogContent from '../Components/AddNewCompanyDialogContent';
import AllOfCompanies from '../Components/AllOfCompanies';

const CompaniesFeature = () => {
  return (
    <section>
      <SectionTitle title='الشركات' hasButton buttonText='اضافة شركة' isButtonOpenDialog dialogContent={<AddNewCompanyDialogContent />} />
      <AllOfCompanies />
    </section>
  );
};

export default CompaniesFeature;
