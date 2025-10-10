import SectionTitle from '@/Components/SectionTitle';
import AllContactNumberBankForThisCompany from '../Components/AllContactNumberBankForThisCompany';
import AddNewContactNumberDialogContent from '../Components/AddNewContactNumberDialogContent';

const Contact = () => {
  return (
    <section>
      <SectionTitle title='ارقام شركة AbbVie' hasButton buttonText='اضافة رقم' isButtonOpenDialog dialogContent={<AddNewContactNumberDialogContent />} />
      <AllContactNumberBankForThisCompany />
    </section>
  );
};

export default Contact;
